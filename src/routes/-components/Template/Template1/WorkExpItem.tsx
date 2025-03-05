import type { IAiCommonItemProps } from '../../AiTextReplace'
import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import { SizeSpace } from '~/hooks'
import AiTextReplace from '../../AiTextReplace'
import RangTimeText from './RangTimeText'

export type WorkExpItemProps = Required<ResumeConfig>['workExpList'][0] & IAiCommonItemProps

function WorkExpItem({ work_time, company_name, department_name, work_desc, onChangeAiText }: WorkExpItemProps) {
  const { token } = theme.useToken()
  return (
    <SizeSpace direction="vertical" key={company_name} small className=" w-full">
      <div className=" flex items-center justify-between">
        <SizeSpace>
          <span className=" text-sm font-bold">{company_name}</span>
          { department_name && <span className=" text-xs" style={{ color: token.colorTextDescription }}>{department_name}</span> }
        </SizeSpace>
        <RangTimeText time={work_time} />
      </div>
      <AiTextReplace text={work_desc} onReplace={aiText => onChangeAiText?.('work_desc', aiText)} />
    </SizeSpace>
  )
}

export default WorkExpItem
