import type { RJSFSchema, UiSchema } from '@rjsf/utils'
import type { ResumeConfigKeys } from '~/api'


const avatarSchema: ConfigSchema = {
  form: {
    type: 'object',
    properties: {
      hidden: {
        type: 'boolean',
        title: '隐藏头像',
      },
      src: {
        type: 'string',
        title: '头像地址',
      },
      shape: {
        type: 'string',
        title: '头像形状',
        enum: ['circle', 'square'],
      },
    },
  }
}

const aboutmeSchema: ConfigSchema = {
  form: {
    type: 'object',
    required: [
      'aboutme_desc',
    ],
    properties: {
      aboutme_desc: {
        type: 'string',
        title: '自我介绍',
      },
    },
  },
  ui: {
    aboutme_desc: {
      'ui:widget': 'textarea',
    },
  },
}

const profileSchema: ConfigSchema = {
  form: {
    type: 'object',
    required: [
      'name',
      'mobile',
      'email',
    ],
    properties: {
      name: {
        type:'string',
        title: '姓名',
      },
      mobile: {
        type:'string',
        title: '手机号',
      },
      email: {
        type:'string',
        title: '邮箱',
      },
      github: {
        type:'string',
        title: 'Github',
      },
      zhihu: {
        type:'string',
        title: '知乎',
      },
      workExpYear: {
        type:'string',
        title: '工作经验',
      },
      workPlace: {
        type:'string',
        title: '期望工作地',
      },
      positionTitle: {
        type:'string',
        title: '职位', 
      }
    },
  }
}

export type ConfigSchema = {
  form: RJSFSchema
  ui?: UiSchema
}

export default {
  avatar: avatarSchema,
  profile: profileSchema,
  aboutme: aboutmeSchema,
} as Record<ResumeConfigKeys, ConfigSchema>
