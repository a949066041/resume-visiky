import TextRender from '~/components/TextRender'
import { SizeSpace, useGlobalData } from '~/hooks'
import EducationItem from './EducationItem'
import Profile from './Profile'
import ProjectItem from './ProjectItem'
import SKillItem from './SkillItem'
import WorkExpItem from './WorkExpItem'
import WorkItem from './WorkItem'
import WrapperSection from './WrapperSection'

function Template1() {
  const { data } = useGlobalData()

  return (
    <SizeSpace className=" px-6 py-4" direction="vertical">
      <Profile />
      <WrapperSection title="教育背景" show={!!data?.educationList?.length}>
        { data!.educationList!.map(education => <EducationItem key={education.school} {...education} />)}
      </WrapperSection>
      <WrapperSection title="个人作品" show={!!data?.workList?.length}>
        { data!.workList!.map(work => <WorkItem {...work} key={work.work_name} />) }
      </WrapperSection>
      <WrapperSection title="自我介绍">
        <TextRender text={data?.aboutme?.aboutme_desc} />
      </WrapperSection>
      <WrapperSection title="个人技能" show={!!data?.skillList?.length}>
        { data!.skillList!.map(skill => <SKillItem {...skill} key={skill.skill_name} />) }
      </WrapperSection>
      <WrapperSection title="工作经历" show={!!data?.workExpList?.length}>
        { data!.workExpList!.map(workExp => <WorkExpItem key={workExp.company_name} {...workExp} />) }
      </WrapperSection>
      <WrapperSection title="项目经验" show={!!data?.projectList?.length}>
        { data!.projectList!.map(project => <ProjectItem key={project.project_name} {...project} />) }
      </WrapperSection>
    </SizeSpace>
  )
}

export default Template1
