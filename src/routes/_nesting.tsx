import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_nesting')({
  component: LayoutComponent,
})

const firstNestingList = [{ path: '/layout-test', title: 'layout-test' }, { path: '/test2', title: '第二层嵌套' }]

function LayoutComponent() {
  return (
    <div className="p-2">
      <div className="border-b">第一层嵌套路由</div>
      <ul className="flex space-x-2">
        { firstNestingList.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              params={{ test: '嵌套参数' }}
              className=" border-b border-dashed border-blue-300"
              activeProps={{ className: ' font-bold' }}
            >
              { item.title }
            </Link>
          </li>
        )) }
      </ul>
      {

      }
      <div>
        <Outlet />
      </div>
    </div>
  )
}
