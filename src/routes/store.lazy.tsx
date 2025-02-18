import { createLazyFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { useCountStore } from '~/store'

export const Route = createLazyFileRoute('/store')({
  component: RouteComponent,
})

function RouteComponent() {
  const { count, increment, decrement } = useCountStore()

  return (
    <div>
      <span>
        countValue:
        {' '}
        {count}
      </span>
      <div className=" space-x-3">
        <button onClick={() => increment(1)} type="button" className=" rounded-lg border-orange-500 border-solid border px-20">
          +1
        </button>
        <button onClick={() => decrement(1)} type="button" className=" rounded-lg border-orange-500 border-solid border px-20">
          -1
        </button>
      </div>
    </div>
  )
}
