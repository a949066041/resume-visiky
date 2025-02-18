import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { queryClient, useAuthStore } from './store'
import { useCacheStore } from './store/cache.store'

const router = createRouter({
  routeTree,
  context: { queryClient, cookie: undefined!, user: undefined! },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  const { userToken } = useCacheStore()
  const { userInfo } = useAuthStore()

  return <RouterProvider router={router} context={{ cookie: userToken, queryClient, user: userInfo }} />
}
