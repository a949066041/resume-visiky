import type { ILoginUserParams, IUserEntity, IUserList, LoginRes } from './user.type'
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'
import { fetchClient } from '~/api/fetch'
import { delay } from '~/utils'

const baseUrl = '/users'
/**
 * api
 */
export function fetchUserList() {
  return fetchClient.get<IUserList>(`${baseUrl}?limit=3`)
}

export function fetchUser(id: IUserEntity['id']) {
  return fetchClient.get<IUserEntity>(`${baseUrl}/${id}`)
}

const USER_PAGER_LIMIT = 10
export function fetchUserPager({ pageParam: offset }: { pageParam: number }): Promise<IUserList> {
  return fetchClient.get<IUserList>(`${baseUrl}?limit=${USER_PAGER_LIMIT}&skip=${offset}`)
}

export function loginUser(params: ILoginUserParams) {
  return fetchClient.post<LoginRes>(`${baseUrl}/login`, params)
}

export async function getUserMe() {
  await delay(2000)
  return fetchClient.get<LoginRes>(`${baseUrl}/me`)
}

/**
 * react query client
 */
export const userQueryListOptions = queryOptions({
  queryKey: ['user-list'],
  queryFn: fetchUserList,
})

export function userQueryOptions(id: IUserEntity['id']) {
  return queryOptions({
    queryKey: ['user-list', { id }],
    queryFn: () => fetchUser(id),
  })
}

export const userQueryPagerOptions = infiniteQueryOptions({
  queryKey: ['user-pager'],
  queryFn: fetchUserPager,
  initialPageParam: 0,
  select(data) {
    return {
      pages: data.pages.map(item => item.users).flat(),
      pageParams: data.pageParams,
    }
  },
  getNextPageParam: (res, list) => {
    return res.total > list.map(item => item.users).flat().length
      ? (res.skip + USER_PAGER_LIMIT)
      : undefined
  },
})

export function userMeQueryOptions(enabled = false) {
  return queryOptions({
    queryKey: ['user-me'],
    queryFn: getUserMe,
    enabled,
  })
}
