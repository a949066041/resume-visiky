export interface IAppConfig {
  apptitle: string
  appVersion: string
}

export default {
  apptitle: APP_TITLE,
  appVersion: `v${APP_VERSION}`,
} as IAppConfig
