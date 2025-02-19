import { setupFetch } from './fetch.setup'

import { setupi18n } from './i18n.setup'
import '@ant-design/v5-patch-for-react-19'

function setupApp() {
  setupFetch()
  setupi18n()
}

setupApp()
