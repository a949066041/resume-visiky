import type { IAiCommonItemProps } from '../../AiTextReplace'
import type { ResumeConfig } from '~/api'
import { Button } from 'antd'
import { SizeSpace } from '~/hooks'
import AiTextReplace from '../../AiTextReplace'

export type WorkItemProps = Required<ResumeConfig>['workList'][0] & IAiCommonItemProps

function WorkItem({ work_name, work_desc, visit_link, onChangeAiText }: WorkItemProps) {
  return (
    <SizeSpace direction="vertical" small>
      <SizeSpace>
        <span className=" font-bold">{ work_name }</span>
        <Button type="link" href={visit_link}>访问连接</Button>
      </SizeSpace>
      <AiTextReplace text={work_desc} onReplace={aiText => onChangeAiText?.('work_desc', aiText)} />
    </SizeSpace>
  )
}

export default WorkItem
