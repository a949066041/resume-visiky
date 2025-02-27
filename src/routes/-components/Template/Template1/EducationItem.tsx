import type { ResumeConfig } from '~/api'
import RangTimeText from './RangTimeText'

export type EducationItemProps = Required<ResumeConfig>['educationList'][0]

function EducationItem({ edu_time, school, major, academic_degree }: EducationItemProps) {
  return (
    <div key={school} className=" flex space-x-2">
      <div className="flex flex-1 justify-between space-x-2">
        <span className=" space-x-1">
          <b>{school}</b>
          {major && <span>{major}</span>}
          {academic_degree && (
            <span className="sub-info">
              {`(${academic_degree})`}
            </span>
          )}
        </span>
      </div>
      <RangTimeText time={edu_time} />
    </div>
  )
}

export default EducationItem
