import { QueryClient } from '@tanstack/react-query'

export * from './cache.store'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})
