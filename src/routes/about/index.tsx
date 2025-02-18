import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div>about page</div>
      <div className=" space-x-2">
        <Link to="/about/1" className=" border-b border-dashed border-blue-300">link to about detail</Link>
        <Link to="/about/name" className=" border-b border-dashed border-blue-300">link to about name</Link>
        <Link to="/about/name/$name" params={{ name: '123' }} className=" border-b border-dashed border-blue-300">link to about name detail</Link>
        <Link to="/about/$value" params={{ value: 'value' }} className=" border-b border-dashed border-blue-300">link to about $value</Link>
        <Link to="/about/$value/create" params={{ value: 'value' }} className=" border-b border-dashed border-blue-300">link to about $value create</Link>
      </div>
    </div>
  )
}
