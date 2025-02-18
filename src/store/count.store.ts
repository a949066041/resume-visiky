import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface States {
  count: number
}

interface Actions {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

export const useCountStore = create<States & Actions>()(
  immer(set => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty
      }),
  })),
)
