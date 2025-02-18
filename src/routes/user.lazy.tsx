import { useSuspenseQuery } from '@tanstack/react-query'
import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router'
import { userQueryListOptions } from '~/api'

export const Route = createLazyFileRoute('/user')({
  component: RouteComponent,
  pendingComponent() {
    return <div>pendingComponent...</div>
  },
})

function RouteComponent() {
  const { data, isLoading, isFetching } = useSuspenseQuery(userQueryListOptions)

  if (isLoading || isFetching) {
    return <div>loading...</div>
  }

  return (
    <div className=" space-x-3 ">
      <Link to="/user/pager">pager</Link>
      <ul className=" w-1/3 bg-green-300 px-2 rounded-lg">
        {data.users.map(item => (
          <li key={item.id}>
            <Link
              to="/user/$id"
              className=" flex items-center"
              params={{ id: `${item.id}` }}
            >
              {`${item.firstName} ${item.lastName}`}
              <span className="icon-[maki--arrow] ml-2"></span>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}
