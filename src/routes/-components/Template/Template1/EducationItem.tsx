import type { ResumeConfig } from '~/api'
import { SizeSpace } from '~/hooks'
import RangTimeText from './RangTimeText'

export type EducationItemProps = Required<ResumeConfig>['educationList'][0]

function EducationItem({ edu_time, school, major, academic_degree }: EducationItemProps) {
  return (
    <div className=" flex items-center justify-between w-full">
      <SizeSpace className=" flex" small>
        <b>{school}</b>
        {major && <span>{major}</span>}
        {academic_degree && (
          <span className="sub-info">
            {`(${academic_degree})`}
          </span>
        )}
      </SizeSpace>
      <RangTimeText time={edu_time} />
    </div>

  )
}

export default EducationItem
