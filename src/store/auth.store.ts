import type { ILoginUserParams, LoginRes } from '~/api'
import { omit } from 'lodash-es'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { loginUser, userMeQueryOptions } from '~/api'
import { queryClient } from '.'
import { useCacheStore } from './cache.store'

interface States {
  userInfo?: Omit<LoginRes, 'accessToken'>
}

interface Actions {
  loginUser: (params: ILoginUserParams) => Promise<void>
  infoUser: () => Promise<void>
  logoutUser: () => void
  setUser: (info: Required<States>['userInfo']) => void
}

function initAuthStore() {
  return {
    userInfo: undefined,
  } as States
}

export const useAuthStore = create<States & Actions>()(
  immer(set => ({
    ...initAuthStore(),
    loginUser: async (params: ILoginUserParams) => {
      const res = await loginUser(params)
      const cacheStore = useCacheStore.getState()
      set((state) => {
        state.userInfo = omit(res, ['accessToken'])
        cacheStore.setToken(res.accessToken)
      })
    },
    async infoUser() {
      const data = await queryClient.ensureQueryData(userMeQueryOptions())
      set((state) => {
        state.userInfo = data
      })
    },
    logoutUser: () => {
      const cacheStore = useCacheStore.getState()
      set((state) => {
        const initStore = initAuthStore()
        state.userInfo = initStore.userInfo
        cacheStore.removeToken()
      })
      window.location.reload()
    },
    setUser: async (info: Required<States>['userInfo']) => {
      set((state) => {
        state.userInfo = info
      })
    },
  })),
)
