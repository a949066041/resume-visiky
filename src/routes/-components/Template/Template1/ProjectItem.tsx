import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import TextRender from '~/components/TextRender'
import { SizeSpace } from '~/hooks'
import AiTextReplace from '../../AiTextReplace'

export type ProjectItemProps = Required<ResumeConfig>['projectList'][0] & { onChangeAiText?: (key: string, newValue: string) => void }

function ProjectItem({ project_name, project_time, project_desc, project_content, project_role, onChangeAiText }: ProjectItemProps) {
  const { token } = theme.useToken()

  return (
    <SizeSpace direction="vertical" className=" w-full" small>
      <div className=" flex justify-between items-center">
        <SizeSpace>
          <span className=" text-sm font-bold">{project_name}</span>
          <div style={{ color: token.colorTextDescription }} className=" text-xs">
            {project_time}
          </div>
        </SizeSpace>
        <div className=" text-xs p-1 px-2 text-white rounded-full" style={{ backgroundColor: token.colorPrimary }}>
          {project_role}
        </div>
      </div>
      <AiTextReplace text={project_desc} onReplace={aiText => onChangeAiText?.('project_desc', aiText)}>
        <TextRender text={project_desc} />
      </AiTextReplace>
      <AiTextReplace text={project_content} onReplace={aiText => onChangeAiText?.('project_content', aiText)}>
        <TextRender text={project_content} />
      </AiTextReplace>
    </SizeSpace>

  )
}

export default ProjectItem
