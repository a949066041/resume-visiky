import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { userQueryOptions } from '~/api'

export const Route = createFileRoute('/user/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data, isLoading } = useQuery(userQueryOptions(+id))

  if (isLoading) {
    return 'loading...'
  }

  return (
    <div className=" whitespace-pre overflow-hidden text-ellipsis w-full">
      data：
      {' '}
      { JSON.stringify(data) }
    </div>
  )
}
