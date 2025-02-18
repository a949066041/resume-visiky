import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_nesting/_layout/test3/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_nesting/_layout/test3/$id"!</div>
}
