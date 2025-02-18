import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$value/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const { value } = Route.useParams()
  return (
    <div>
      Hello "/about/
      { value }
      /create"!
    </div>
  )
}
