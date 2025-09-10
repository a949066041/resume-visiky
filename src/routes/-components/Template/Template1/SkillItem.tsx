import type { IAiCommonItemProps } from '../../AiTextReplace'
import type { ResumeConfig } from '~/api'
import { Rate } from 'antd'
import { SizeSpace } from '~/hooks'
import AiTextReplace from '../../AiTextReplace'

export type SkillItemProps = Required<ResumeConfig>['skillList'][0] & IAiCommonItemProps

function SKillItem({ skill_name, skill_desc, skill_level, onChangeAiText }: SkillItemProps) {
  return (
    <SizeSpace className=" w-full justify-between" direction="vertical">
      <SizeSpace>
        <span className=" text-base font-bold">
          {skill_name}
        </span>
        <Rate className=" whitespace-nowrap" disabled value={skill_level} />
      </SizeSpace>
      <AiTextReplace text={skill_desc} onReplace={aiText => onChangeAiText?.('skill_desc', aiText)} />
    </SizeSpace>
  )
}

export default SKillItem
