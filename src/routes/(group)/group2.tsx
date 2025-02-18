import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/(group)/group2')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/(group)/group2"!
      <Link to="/group3">to group3</Link>
    </div>
  )
}
