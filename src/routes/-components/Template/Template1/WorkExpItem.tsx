import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import TextRender from '~/components/TextRender'
import { SizeSpace } from '~/hooks'
import RangTimeText from './RangTimeText'

export type WorkExpItemProps = Required<ResumeConfig>['workExpList'][0]

function WorkExpItem({ work_time, company_name, department_name, work_desc }: WorkExpItemProps) {
  const { token } = theme.useToken()
  return (
    <SizeSpace direction="vertical" key={company_name} className=" flex flex-col w-full">
      <div className=" flex items-center justify-between">
        <SizeSpace>
          <b>{company_name}</b>
          { department_name && <span className=" text-xs" style={{ color: token.colorTextDescription }}>{department_name}</span> }
        </SizeSpace>
        <RangTimeText time={work_time} />
      </div>
      <TextRender text={work_desc} />
    </SizeSpace>
  )
}

export default WorkExpItem
