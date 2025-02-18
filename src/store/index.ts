import { QueryClient } from '@tanstack/react-query'

export * from './auth.store'
export * from './cache.store'
export * from './count.store'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})
