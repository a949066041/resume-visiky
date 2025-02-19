import { z } from 'zod'

export type LangKeys = 'zh' | 'en'

export type ModeKeys = 'read' | 'edit'

export const langList: { key: LangKeys, label: string }[] = [
  { key: 'zh', label: '中' },
  { key: 'en', label: 'En' },
]

const templateSchema = z.object({
  url: z.string(),
  id: z.enum(['template1', 'template2', 'template3']),
  description: z.string(),
  disabled: z.boolean().optional(),
})

export const TEMPLATES: { url: string, id: TemplateKeys, description: string, disabled?: boolean }[] = [
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

export type TemplateKeys = 'template1' | 'template2' | 'template3'
