import type { ResumeConfig } from '~/api'
import { theme } from 'antd'
import clx from 'classix'
import { useMemo } from 'react'
import Avatar from '~/components/Avatar'
import TextRender from '~/components/TextRender'
import { useGlobalData } from '~/hooks'

const profileList = [
  ['mobile', 'icon-[icon-park-outline--phone-telephone]'],
  ['email', 'icon-[icon-park-outline--mail]'],
  ['github', 'icon-[icon-park-outline--github]'],
  ['zhihu', 'icon-[ri--zhihu-fill]'],
  ['workExpYear', 'icon-[ri--zhihu-fill]'],
  ['workPlace', 'icon-[icon-park-outline--local-two]'],
  ['positionTitle', 'icon-[icon-park-outline--like]'],
] as [keyof ResumeConfig['profile'], string][]

function RangTimeText({ time, className }: { time?: [string | undefined, string | number], className?: string }) {
  const { token } = theme.useToken()
  const [start, end] = time!

  const wrapperText = useMemo(() => {
    return clx(className, ' text-xs')
  }, [className])

  if (!time) {
    return null
  }

  return (
    <div style={{ color: token.colorTextDescription }} className={wrapperText}>
      {start}
      {end ? ` ~ ${end}` : '至今'}
    </div>
  )
}

function WrapperSection({ children, title }: { children: React.ReactNode, title: string }) {
  const { token } = theme.useToken()
  return (
    <section className=" space-y-2">
      <div className=" flex items-center">
        <span className="text-sm font-bold " style={{ color: token.colorPrimary }}>{title}</span>
        <div className={clx('relative flex-1 items-center rounded-2xl opacity-45 mx-2')} style={{ backgroundColor: token.colorPrimary, height: '1px' }}></div>
      </div>
      <div className=" space-y-2">
        { children }
      </div>
    </section>
  )
}

function Template1() {
  const { data } = useGlobalData()
  const { token } = theme.useToken()

  const ProfileList = useMemo(() => {
    if (!data?.profile) {
      return []
    }
    const profileValue = data.profile
    return profileList.map(([key, icon]) => ({ value: profileValue?.[key], icon, key }))
      .filter(item => item.value)
      .map(({ key, icon, value }) => (
        <div key={key} className=" text-sm whitespace-nowrap space-x-2 items-center flex">
          <i className={clx(icon, ' text-sm')} style={{ color: token.colorPrimary }}></i>
          <span>{ value }</span>
        </div>
      ))
  }, [data?.profile, token.colorPrimary]).slice(0, 6)

  return (
    <div className=" px-6 py-4 space-y-3">
      <div className=" flex  justify-between items-center">
        <div className=" flex-1 space-y-2">
          <div className=" text-2xl ">{data?.profile?.name}</div>
          <div className=" grid grid-cols-2 gap-2">
            { ProfileList }
          </div>
        </div>
        {
          !data?.avatar?.hidden && (
            <div className=" w-20 h-20 flex-none">
              <Avatar {...data?.avatar} />
            </div>
          )
        }
      </div>
      <WrapperSection title="教育背景">
        {data?.educationList?.map((education) => {
          return (
            <div key={education.school} className=" flex space-x-2">
              <div className="flex flex-1 justify-between space-x-2">
                <span className="  space-x-1">
                  <b>{education.school}</b>
                  {education.major && <span>{education.major}</span>}
                  {education.academic_degree && (
                    <span className="sub-info">
                      {`(${education.academic_degree})`}
                    </span>
                  )}
                </span>
              </div>
              <RangTimeText time={education.edu_time} />
            </div>
          )
        })}
      </WrapperSection>
      <WrapperSection title="自我介绍">
        <TextRender text={data?.aboutme?.aboutme_desc} />
      </WrapperSection>
      <WrapperSection title="工作经历">
        {
          data?.workExpList?.map((workExp) => {
            return (
              <div key={workExp.company_name} className=" flex space-x-2 flex-col">
                <div className=" flex-1 flex justify-between">
                  <div className="space-x-2">
                    <b>{workExp.company_name}</b>
                    { workExp.department_name && <span className=" text-xs" style={{ color: token.colorTextDescription }}>{workExp.department_name}</span> }
                  </div>
                  <RangTimeText time={workExp.work_time} />
                </div>
                <TextRender text={workExp.work_desc} />
              </div>
            )
          })
        }
      </WrapperSection>
      <WrapperSection title="项目经验">
        {
          data?.projectList?.map(project => (
            <div key={project.project_name} className=" flex space-x-2 flex-col">
              <div className=" flex-1 flex justify-between">
                <div className="space-x-2">
                  <b>{project.project_name}</b>
                </div>
                <div style={{ color: token.colorTextDescription }} className=" text-xs">
                  {project.project_time}
                </div>
              </div>
              <TextRender text={project.project_desc} />
              <TextRender text={project.project_content} />
            </div>
          ))
        }
      </WrapperSection>
    </div>
  )
}

export default Template1
