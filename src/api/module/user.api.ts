import type { IUserList } from './user.type'
import { queryOptions } from '@tanstack/react-query'
import { fetchClient } from '~/api/fetch'

const baseUrl = '/users'
/**
 * api
 */
export function fetchUserList() {
  return fetchClient.get<IUserList>(`${baseUrl}?limit=3`)
}

/**
 * react query client
 */
export const userQueryListOptions = queryOptions({
  queryKey: ['user-list'],
  queryFn: fetchUserList,
})
