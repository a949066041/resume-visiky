import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/name/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/name/"!</div>
}
