import type { ResumeConfig } from '~/api'
import TextRender from '~/components/TextRender'
import { SizeSpace } from '~/hooks'

export type WorkItemProps = Required<ResumeConfig>['workList'][0]

function WorkItem({ work_name, work_desc, visit_link }: WorkItemProps) {
  return (
    <SizeSpace direction="vertical" small>
      <SizeSpace>
        <span className=" font-bold">{ work_name }</span>
        <a href={visit_link}>访问连接</a>
      </SizeSpace>
      <TextRender text={work_desc} />
    </SizeSpace>
  )
}

export default WorkItem
