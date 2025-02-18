import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_nesting/_layout/test2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_nesting/_layout/ 嵌套 _ 嵌套"!</div>
}
