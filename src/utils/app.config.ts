export interface IAppConfig {
  apptitle: string
  appVersion: string
  appHome: string
  appAuthor: string
}

export default {
  apptitle: APP_TITLE,
  appHome: APP_HOME,
  appAuthor: APP_AUTHOR,
  appVersion: `v${APP_VERSION}`,
} as IAppConfig
