import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en'
import zh from './i18n/zh'

export const langList = [
  { key: 'zh', label: '中' },
  { key: 'en', label: 'En' },
] as const

export function setupi18n() {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en,
        zh,
      },
      fallbackLng: 'en',
      debug: import.meta.env.DEV,
    })
}
