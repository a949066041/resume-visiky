import type { CollapseProps } from 'antd'
import type { ResumeConfigKeys } from '~/api'
import { z } from 'zod'

export type LangKeys = 'zh' | 'en'

export type ModeKeys = 'read' | 'edit'

export type Template = z.infer<typeof templateSchema>

export const langList: { key: LangKeys, label: string }[] = [
  { key: 'zh', label: '中' },
  { key: 'en', label: 'En' },
]

export const templateSchema = z.object({
  url: z.string(),
  id: z.enum(['template1', 'template2', 'template3']),
  description: z.string(),
  disabled: z.boolean().optional(),
})

export const TEMPLATES: Template[] = [
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg',
    id: 'template1',
    description: '默认模板(适用于单页)',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/RGxVcJ2O3q/moban2.svg',
    id: 'template2',
    description: '简易模板',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/Kn2jUKcBme/moban2.svg',
    id: 'template3',
    description: '简易模板(适用于多页)',
    disabled: false,
  },
]

export function moduleList(cb?: (key: ResumeConfigKeys) => void) {
  return [
    {
      label: '头像设置',
      key: 'avatar',
      collapsible: 'icon',
      showArrow: false,
    },
    {
      label: '个人信息',
      key: 'profile',
      collapsible: 'icon',
      showArrow: false,
    },
    {
      label: '教育背景',
      key: 'educationList',
    },
    {
      label: '自我介绍',
      key: 'aboutme',
      collapsible: 'icon',
      showArrow: false,
    },
    {
      label: '更多信息',
      key: 'awardList',
    },
    {
      label: '个人作品',
      key: 'workList',
    },
    {
      label: '专业技能',
      key: 'skillList',
    },
    {
      label: '工作经历',
      key: 'workExpList',
    },
    {
      label: '项目经历',
      key: 'projectList',
    },
  ].map(item => ({
    ...item,
    className: ' rounder-sm  mb-2 !border-none !rounded-2xl bg-black/5',
    onClick: (!item.showArrow && typeof item.showArrow === 'boolean') ? () => cb?.(item.key as unknown as ResumeConfigKeys) : null,
  })) as CollapseProps['items']
}
