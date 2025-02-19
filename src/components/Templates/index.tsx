import clx from 'classix'
import React from 'react'
import { TEMPLATES } from '~/constant'
import { useRootSearch } from '~/hooks'

export function Templates() {
  const { params, changeSearch } = useRootSearch()
  return (
    <div className=" grid grid-cols-2 gap-6 my-6">
      {TEMPLATES.map((item) => {
        return (
          <div
            className={clx(' flex flex-col items-center hover:cursor-pointer')}
            key={`${item.id}`}
            onClick={() => !item.disabled && changeSearch({ template: item.id })}
          >
            <span className="template-id">{item.id}</span>
            <span className="template-description">
              { item.description }
            </span>
          </div>
        )
      })}
    </div>
  )
}
