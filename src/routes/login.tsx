import type { ILoginUserParams } from '~/api'
import { useMutation } from '@tanstack/react-query'
import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'
import { z } from 'zod'
import { useAuthStore } from '~/store'

export const Route = createFileRoute('/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  component: RouteComponent,
  beforeLoad({ context: { cookie }, search }) {
    // 校验用户是否登录跳转
    if (cookie) {
      throw redirect({ to: search.redirect || '/page' })
    }
  },
})

function RouteComponent() {
  const auth = useAuthStore()
  const router = useRouter()
  const navigate = Route.useNavigate()
  const search = Route.useSearch()

  const action = useMutation({
    mutationKey: ['login'],
    mutationFn: (params: ILoginUserParams) => auth.loginUser({ ...params, username: 'emilys', password: 'emilyspass' }),
  })

  async function handleSubmitLogin(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const username = data.get('username') as string
    const password = data.get('password') as string

    await action.mutateAsync({ username, password })
    await router.invalidate()
    await navigate({ to: search.redirect || '/page' })
  }

  return (
    <div>
      login page
      <form className=" mt-2 border-t" onSubmit={handleSubmitLogin}>
        <div>
          <label htmlFor="username">username：</label>
          <input name="username" className=" border" type="text" required />
        </div>
        <div>
          <label htmlFor="password">password：</label>
          <input name="password" className=" border" type="text" required />
        </div>
        <button className=" px-2 border-red-400 border ml-2" type="submit" disabled={action.isPending}>
          {
            action.isPending ? 'login...' : 'login'
          }
        </button>
      </form>
    </div>
  )
}
