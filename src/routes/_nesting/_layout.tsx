import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_nesting/_layout')({
  component: RouteComponent,
})

const secondNestingList = [{ path: '/test2', title: 'test2' }, { path: '/test3/$id', title: '动态嵌套' }]

function RouteComponent() {
  return (
    <div>
      <div className="border-b">第二层嵌套路由</div>
      <ul className="flex space-x-2">
        { secondNestingList.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              params={{ id: '嵌套参数' }}
              className=" border-b border-dashed border-blue-300"
              activeProps={{ className: ' font-bold' }}
            >
              { item.title }
            </Link>
          </li>
        )) }
      </ul>
      <Outlet></Outlet>
    </div>
  )
}
