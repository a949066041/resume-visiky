import type { Schema } from 'form-render'
import type { ResumeConfigKeys } from '~/api'

const avatarSchema: Schema = {
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
      widget: 'select',
      title: '头像形状',
      enum: ['circle', 'square'],
      enumNames: ['圆形', '方形'],
      default: 'circle',
    },
  },
}

const aboutmeSchema: Schema = {
  type: 'object',
  properties: {
    aboutme_desc: {
      required: true,
      type: 'string',
      title: '自我介绍',
      widget: 'TextArea',
    },
  },
}

const profileSchema: Schema = {
  type: 'object',
  properties: {
    name: {
      required: true,
      type: 'string',
      title: '姓名',
    },
    mobile: {
      required: true,
      type: 'string',
      title: '手机号',
    },
    email: {
      required: true,
      type: 'string',
      title: '邮箱',
    },
    github: {
      type: 'string',
      title: 'Github',
    },
    zhihu: {
      type: 'string',
      title: '知乎',
    },
    workExpYear: {
      type: 'string',
      title: '工作经验',
    },
    workPlace: {
      type: 'string',
      title: '期望工作地',
    },
    positionTitle: {
      type: 'string',
      title: '职位',
    },
  },
}

const educationSchema: Schema = {
  type: 'object',
  properties: {
    edu_time: {
      required: true,
      type: 'range',
      format: 'date',
      title: '时间',
    },
    school: {
      required: true,
      type: 'string',
      title: '学校',
    },
    major: {
      type: 'string',
      title: '专业',
    },
    academic_degree: {
      type: 'string',
      title: '学历',
    },
  },
}

const awardListSchema: Schema = {
  type: 'object',
  properties: {
    award_time: {
      required: true,
      type: 'string',
      title: '获奖时间',
    },
    award_info: {
      required: true,
      type: 'string',
      title: '奖项名称',
      widget: 'TextArea',
    },
  },
}

const workExpListSchema: Schema = {
  type: 'object',
  properties: {
    work_time: {
      required: true,
      type: 'string',
      title: '起止时间',
    },
    company_name: {
      required: true,
      type: 'string',
      title: '公司名称',
    },
    department_name: {
      type: 'string',
      title: '部门名称',
    },
    work_desc: {
      required: true,
      type: 'string',
      title: '职位或描述',
      widget: 'TextArea',
    },
  },
}

const projectListSchema: Schema = {
  type: 'object',
  properties: {
    project_time: {
      required: true,
      type: 'string',
      title: '起止时间',
    },
    project_name: {
      type: 'string',
      title: '项目名称',
    },
    project_role: {
      type: 'string',
      title: '担任角色',
    },
    project_desc: {
      type: 'string',
      title: '项目描述',
      widget: 'TextArea',
    },
    project_content: {
      type: 'string',
      title: '主要工作',
      widget: 'TextArea',
    },
  },
}

const workListSchema: Schema = {
  type: 'object',
  properties: {
    work_name: {
      type: 'string',
      title: '作品名称',
      required: true,
    },
    visit_link: {
      type: 'string',
      title: '作品链接',
    },
    work_desc: {
      type: 'string',
      title: '作品描述',
      widget: 'TextArea',
    },
  },
}

const skillListSchema: Schema = {
  type: 'object',
  properties: {
    skill_name: {
      type: 'string',
      title: '技能名称',
      required: true,
    },
    skill_level: {
      type: 'number',
      title: '掌握程度',
    },
    skill_desc: {
      type: 'string',
      title: '技能描述',
      widget: 'TextArea',
    },
  },
}

export default {
  avatar: avatarSchema,
  profile: profileSchema,
  educationList: educationSchema,
  aboutme: aboutmeSchema,
  awardList: awardListSchema,
  workExpList: workExpListSchema,
  projectList: projectListSchema,
  workList: workListSchema,
  skillList: skillListSchema,
} as Record<ResumeConfigKeys, Schema>
