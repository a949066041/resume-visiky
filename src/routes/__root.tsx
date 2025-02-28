import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { App, ConfigProvider } from 'antd'
import en from 'antd/es/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import DataContextProvider from '~/hooks/useData'
import SizeContextProvider from '~/hooks/useSize'
import Footer from './-components/Footer'
import GlobalConfig from './-components/GlobalConfig'
import Header from './-components/Header'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  const { i18n } = useTranslation()

  useEffect(() => {
    dayjs.locale(i18n.language === 'zh' ? 'zh-cn' : '')
  }, [i18n])

  return (
    <App>
      <SizeContextProvider>
        {
          ({ color }) => (
            <DataContextProvider>
              <ConfigProvider
                locale={i18n.language === 'zh' ? zhCN : en}
                theme={{ token: { colorPrimary: color, borderRadius: 2 }, components: { Rate: { starSize: 14 } } }}
              >
                <Header />
                <Outlet />
                <Footer />
                <GlobalConfig />
              </ConfigProvider>
            </DataContextProvider>
          )
        }
      </SizeContextProvider>
    </App>
  )
}
