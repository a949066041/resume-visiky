import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'
import { author, homepage, version } from './package.json' with { type: 'json' }

const { publicVars } = loadEnv()
const APP_TITLE = 'Resume Generator'

console.log({ publicVars })

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    define: {
      APP_AUTHOR: JSON.stringify(author),
      APP_HOME: JSON.stringify(homepage),
      APP_TITLE: JSON.stringify(APP_TITLE),
      APP_VERSION: JSON.stringify(version),
      ...publicVars,
    },
  },
  html: {
    favicon: './src/assets/icon/favicon.ico',
    title: APP_TITLE,
  },
  output: {
    assetPrefix: '/resume-visiky',
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack({ routeTreeFileHeader: [] })],
    },
  },
})
