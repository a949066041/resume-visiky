import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import TextRender from '~/components/TextRender'
import { SizeSpace } from '~/hooks'

export type ProjectItemProps = Required<ResumeConfig>['projectList'][0]

function ProjectItem({ project_name, project_time, project_desc, project_content, project_role }: ProjectItemProps) {
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
      <TextRender text={project_desc} />
      <TextRender text={project_content} />
    </SizeSpace>

  )
}

export default ProjectItem
