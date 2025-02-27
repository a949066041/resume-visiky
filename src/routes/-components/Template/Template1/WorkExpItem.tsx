import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import TextRender from '~/components/TextRender'
import RangTimeText from './RangTimeText'

export type WorkExpItemProps = Required<ResumeConfig>['workExpList'][0]

function WorkExpItem({ work_time, company_name, department_name, work_desc }: WorkExpItemProps) {
  const { token } = theme.useToken()
  return (
    <div key={company_name} className=" flex flex-col">
      <div className=" flex-1 flex justify-between">
        <div className="space-x-2">
          <b>{company_name}</b>
          { department_name && <span className=" text-xs" style={{ color: token.colorTextDescription }}>{department_name}</span> }
        </div>
        <RangTimeText time={work_time} />
      </div>
      <TextRender text={work_desc} />
    </div>
  )
}

export default WorkExpItem
