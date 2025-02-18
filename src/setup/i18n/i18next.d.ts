import type resources from './en'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources
    lng: 'zh' | 'en'
  }
}
