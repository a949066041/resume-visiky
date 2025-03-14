import type { IAiCommonItemProps } from '../../AiTextReplace'
import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import { SizeSpace } from '~/hooks'
import AiTextReplace from '../../AiTextReplace'

export type ProjectItemProps = Required<ResumeConfig>['projectList'][0] & IAiCommonItemProps

function ProjectItem({ project_name, project_time, project_desc, project_content, project_role, onChangeAiText }: ProjectItemProps) {
  const { token } = theme.useToken()

  return (
    <SizeSpace direction="vertical" className=" w-full" small>
      <div className=" flex justify-between items-center">
        <SizeSpace>
          <span className=" text-sm font-bold">{project_name}</span>
          <div style={{ color: token.colorTextDescription }} className=" text-xs">
            { Array.isArray(project_time) ? project_time?.join('~') : project_time}
          </div>
        </SizeSpace>
        <div className=" text-xs p-1 px-2 text-white rounded-full" style={{ backgroundColor: token.colorPrimary }}>
          {project_role}
        </div>
      </div>
      <AiTextReplace text={project_desc} onReplace={aiText => onChangeAiText?.('project_desc', aiText)} />
      <AiTextReplace text={project_content} onReplace={aiText => onChangeAiText?.('project_content', aiText)} />
    </SizeSpace>
  )
}

export default ProjectItem
