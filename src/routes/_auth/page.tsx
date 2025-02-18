import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useAuthStore } from '~/store'

export const Route = createFileRoute('/_auth/page')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userInfo, logoutUser } = useAuthStore()
  const router = useRouter()

  async function logoutAction() {
    logoutUser()

    await router.invalidate()
  }

  return (
    <div>
      Hello "/_auth/page"
      { userInfo?.gender }
      <button type="button" onClick={logoutAction}>logout</button>
    </div>
  )
}
