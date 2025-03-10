import type { Template } from '~/constant'
import clx from 'classix'
import React from 'react'
import { ReactSVG } from 'react-svg'
import { TEMPLATES } from '~/constant'
import { useRootSearch } from '~/hooks'

interface ITemplateItemProps {
  item: Template
  isActive: boolean
  changeSearch: ReturnType<typeof useRootSearch>['changeSearch']
}

function TemplateItem({ item, isActive, changeSearch }: ITemplateItemProps) {
  return (
    <div
      className={
        clx(' flex flex-col items-center hover:cursor-pointer')
      }
      key={`${item.id}`}
      onClick={() => !item.disabled && changeSearch({ template: item.id })}
    >
      <ReactSVG
        src={item.url}
        className={clx('w-[160px]  shadow mb-2  box-border border-white/20  border-solid border', isActive ? ' !border-black/20' : '')}
      />
      <span className=" text-black/65 text-sm">{item.id}</span>
      <span className="text-xs text-black">
        { item.description }
      </span>
    </div>
  )
}

function TemplatesPreview() {
  const { params, changeSearch } = useRootSearch()
  return (
    <div className=" grid grid-cols-2 gap-6 my-6">
      {TEMPLATES.map(item => <TemplateItem isActive={item.id === params.template} key={item.id} changeSearch={changeSearch} item={item} />) }
    </div>
  )
}

export default TemplatesPreview
