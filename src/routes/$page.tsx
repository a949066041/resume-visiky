import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$page')({
  component: RouteComponent,
})

function RouteComponent() {
  const { page } = Route.useParams()
  return (
    <div>
      { page }
      not found
    </div>
  )
}
