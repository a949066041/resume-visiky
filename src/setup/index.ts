import { setupFetch } from './fetch.setup'
import { setupi18n } from './i18n.setup'

function setupApp() {
  setupFetch()
  setupi18n()
}

setupApp()
