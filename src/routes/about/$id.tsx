import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return (
    <div>
      Hello "/about/[id]"!
      { id }
    </div>
  )
}
