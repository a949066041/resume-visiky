import { useMemo } from "react"
import { ResumeConfigKeys } from "~/api"
import { useGlobalData } from "~/hooks"

function ModuleContentChildren({ parentKey }: { parentKey: ResumeConfigKeys }) {
  const { data } = useGlobalData()

  const subList = useMemo<string[]>(() => {
    if (!data) {
      return [] as string[]
    }
    if (parentKey === 'educationList') {
      return data[parentKey]!.map(item => `${item.edu_time}-${item.school}-${item.major}-${item.academic_degree}`)
    }
    if (parentKey === 'awardList') {
      return data[parentKey]!.map(item => `${item.award_info}-${item.award_time}`)
    }
    if (parentKey === 'workExpList') {
      return data[parentKey]!.map(item => `${item.company_name}-${item.department_name}-${item.work_time}-${item.work_desc}`)
    }
    if (parentKey === 'projectList') {
      return data[parentKey]!.map(item => `${item.project_name}-${item.project_role}-${item.project_desc}-${item.project_time}-${item.project_desc}`)
    }
    return [] as string[]
  }, [data, parentKey])

  return (
    <div className=" space-y-2">
      { subList.map((item, index) => <div className="  cursor-move truncate hover:bg-amber-600 py-2 px-3 rounded-xl transition-all" key={index}>{item}</div>)}
    </div>
  )
}

export default ModuleContentChildren