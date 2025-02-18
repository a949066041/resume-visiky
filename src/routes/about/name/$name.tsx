import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/name/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { name } = Route.useParams()
  return (
    <div>
      Hello "/about/name/$name"!
      { name }
    </div>
  )
}
