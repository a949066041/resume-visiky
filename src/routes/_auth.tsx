import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'
import { useAuthStore } from '~/store'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
  async beforeLoad({ context: { cookie }, location }) {
    if (!cookie) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  async loader() {
    const { userInfo, infoUser } = useAuthStore.getState()
    if (!userInfo) {
      await infoUser()
    }
  },
})

function RouteComponent() {
  return (
    <>
      <Link to="/page2">
        to auth page
      </Link>
      <Outlet />
    </>
  )
}
