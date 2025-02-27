import TextRender from '~/components/TextRender'
import { SizeSpace, useGlobalData } from '~/hooks'
import EducationItem from './EducationItem'
import Profile from './Profile'
import ProjectItem from './ProjectItem'
import WorkExpItem from './WorkExpItem'
import WrapperSection from './WrapperSection'

function Template1() {
  const { data } = useGlobalData()

  return (
    <SizeSpace className=" px-6 py-4" direction={'vertical'}>
      <Profile />
      <WrapperSection title="教育背景">
        {data?.educationList?.map(education => <EducationItem key={education.school} {...education} />)}
      </WrapperSection>
      <WrapperSection title="自我介绍">
        <TextRender text={data?.aboutme?.aboutme_desc} />
      </WrapperSection>
      <WrapperSection title="工作经历">
        { data?.workExpList?.map(workExp => <WorkExpItem key={workExp.company_name} {...workExp} />) }
      </WrapperSection>
      <WrapperSection title="项目经验">
        {data?.projectList?.map(project => <ProjectItem key={project.project_name} {...project} />)}
      </WrapperSection>
    </SizeSpace>
  )
}

export default Template1
