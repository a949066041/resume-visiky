import type { ResumeConfig } from './user.type'
import { queryOptions } from '@tanstack/react-query'
import { fetchClient } from '~/api/fetch'

/**
 * api
 */

export function fetchResume(lang: string, branch?: string, user?: string) {
  return fetchClient.get<ResumeConfig>(`https://raw.githubusercontent.com/${user}/${user}/${branch}/resume.json`)
}

/**
 * react query client
 */
export function resumeQueryOptions(lang: string, branch?: string, user?: string) {
  return queryOptions({
    enabled: !!user,
    queryKey: ['resume', { lang, branch, user }],
    queryFn: () => fetchResume(lang, branch, user),
  })
}
