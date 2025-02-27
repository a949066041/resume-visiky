import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import TextRender from '~/components/TextRender'

export type ProjectItemProps = Required<ResumeConfig>['projectList'][0]

function ProjectItem({ project_name, project_time, project_desc, project_content, project_role }: ProjectItemProps) {
  const { token } = theme.useToken()
  return (
    <div key={project_name} className=" flex flex-col space-y-1">
      <div className=" flex-1 flex justify-between items-center">
        <div className="space-x-2 flex items-center">
          <b>{project_name}</b>
          <div style={{ color: token.colorTextDescription }} className=" text-xs">
            {project_time}
          </div>
        </div>
        <div className=" text-xs p-1 px-2 text-white rounded-full" style={{ backgroundColor: token.colorPrimary }}>
          {project_role}
        </div>
      </div>
      <TextRender text={project_desc} />
      <TextRender text={project_content} />
    </div>
  )
}

export default ProjectItem
