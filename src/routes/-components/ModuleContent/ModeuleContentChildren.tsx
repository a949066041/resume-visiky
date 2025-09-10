import type { DragEndEvent } from '@dnd-kit/core'
import type { ResumeConfigKeys } from '~/api'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Button } from 'antd'
import update from 'immutability-helper'
import { useCallback, useMemo } from 'react'
import { useGlobalData } from '~/hooks'

interface DragItem {
  id: string
  value?: string
  children?: React.ReactNode
}

function SortableItem({ id, children }: DragItem) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li ref={setNodeRef} style={style}>
      <div {...attributes} {...listeners}>
        { children }
      </div>
    </li>
  )
}

function ModuleContentChildren({ parentKey, onConfig }: { parentKey: ResumeConfigKeys, onConfig: (listIndex?: number) => void }) {
  const { data, confirmMessage } = useGlobalData()

  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  })

  const sensors = useSensors(sensor)

  const subList = useMemo<DragItem[]>(() => {
    if (!data) {
      return [] as DragItem[]
    }
    if (parentKey === 'educationList') {
      return data[parentKey]!.map(item => ({ value: `${item.edu_time}-${item.school}-${item.major}-${item.academic_degree}`, id: item.school }))
    }
    if (parentKey === 'awardList') {
      return data[parentKey]!.map(item => ({ value: `${item.award_info}-${item.award_time}`, id: item.award_info }))
    }
    if (parentKey === 'workExpList') {
      return data[parentKey]!.map(item => ({ value: `${item.company_name}-${item.department_name}-${item.work_time}-${item.work_desc}`, id: item.company_name }))
    }
    if (parentKey === 'projectList') {
      return data[parentKey]!.map(item => ({ value: `${item.project_name}-${item.project_role}-${item.project_desc}-${item.project_time}-${item.project_desc}`, id: item.project_name }))
    }
    if (parentKey === 'workList') {
      return data[parentKey]!.map(item => ({ value: `${item.work_name}-${item.visit_link}`, id: item.work_name }))
    }
    if (parentKey === 'skillList') {
      return data[parentKey]!.map(item => ({ value: `${item.skill_name}-${item.skill_level}`, id: item.skill_name }))
    }
    return [] as DragItem[]
  }, [data, parentKey])

  const handleDragEnd = useCallback(({ active, over }: DragEndEvent) => {
    if (!over || !active.data.current || !over.data.current || active.id === over?.id) {
      return
    }

    const activeIndex = active.data.current.sortable.index
    const overIndex = over.data.current.sortable.index
    const prevData = data![parentKey]! as unknown[]
    const newData = update(prevData, {
      $splice: [
        [activeIndex, 1],
        [overIndex, 0, prevData[activeIndex]],
      ],
    })

    confirmMessage(parentKey, newData)
  }, [data, parentKey, confirmMessage])

  const handleDelete = useCallback((index: number) => {
    const prevData = data![parentKey]! as unknown[]
    const newData = update(prevData, {
      $splice: [[index, 1]],
    })
    confirmMessage(parentKey, newData)
  }, [data, parentKey, confirmMessage])

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className=" space-y-2">
        <SortableContext items={subList}>
          <ul>
            {
              (subList || []).map((item, index) => (
                <SortableItem key={item.id} value={item.value} id={item.id}>
                  <div className="  group flex hover:bg-amber-600  py-2 px-3 rounded-xl transition-all items-center">
                    <div onClick={() => onConfig(index)} className=" flex-1  truncate " key={item.id}>
                      {item.value}
                    </div>
                    <i className="icon-[icon-park-outline--delete] cursor-pointer  group-hover:block hidden" onClick={() => handleDelete(index)}></i>
                  </div>
                </SortableItem>
              ))
            }
            <Button type="dashed" onClick={() => onConfig(subList.length)} className=" mt-2" block>数据添加</Button>
          </ul>
        </SortableContext>
      </div>
    </DndContext>
  )
}

export default ModuleContentChildren
