import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/page2')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = Route.useRouteContext()
  return (
    <div>
      { JSON.stringify(user) }
      {' '}
      Hello "/_auth/page2"!
    </div>
  )
}
