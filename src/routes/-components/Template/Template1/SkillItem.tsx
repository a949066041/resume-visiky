import type { ResumeConfig } from '~/api'
import { Rate } from 'antd'
import { SizeSpace } from '~/hooks'

export type SkillItemProps = Required<ResumeConfig>['skillList'][0]

function SKillItem({ skill_name, skill_desc, skill_level }: SkillItemProps) {
  return (
    <SizeSpace className=" w-full justify-between">
      <SizeSpace small>
        <span className=" text-base font-bold">
          {skill_name}
        </span>
        <span className=" text-xs">{skill_desc}</span>
      </SizeSpace>
      <Rate disabled value={skill_level} />
    </SizeSpace>
  )
}

export default SKillItem
