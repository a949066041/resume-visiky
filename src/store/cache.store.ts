import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface States {
  userToken?: string
}

interface Actions {
  setToken: (token: string) => void
  removeToken: () => void
}

export const useCacheStore = create<States & Actions>()(
  persist(
    immer(set => ({
      userToken: undefined,
      setToken: (token: string) =>
        set((state) => {
          state.userToken = token
        }),
      removeToken: () => {
        set((state) => {
          state.userToken = undefined
        })
      },
    })),
    { name: 'cache' },
  ),
)
