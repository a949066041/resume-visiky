import type { QueryClient } from '@tanstack/react-query'
import type { LoginRes } from '~/api'
import { useIsFetching } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import classix from 'classix'
import { userMeQueryOptions } from '~/api'
import { ThemeProvider, Themes, useTheme } from '~/components'
import appConfig from '~/utils/app.config'

function ThemeMode() {
  const { themeName, set } = useTheme()
  return (
    <i
      onClick={() => set(themeName !== Themes.DARK)}
      className=" dark:icon-[circum--light] icon-[circum--dark] border cursor-pointer text-4xl"
    />
  )
}

interface MyRouterContext {
  queryClient: QueryClient
  cookie?: string
  user?: Omit<LoginRes, 'accessToken'>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  const loading = useIsFetching({ queryKey: userMeQueryOptions().queryKey })

  return (
    <ThemeProvider>
      <div className=" flex h-screen dark:bg-black/75 bg-white/85 dark:text-white">
        <ul className=" w-[200px] flex-none border-r-2 border-dashed border-blue-300 h-full">
          {
            import.meta.env.DEV && (
              <span className=" fixed right-1.5 top-1.5 bg-amber-600 px-2 rounded-4xl z-10 cursor-move">
                <i className=" icon-[custom--anq]" />
                { appConfig.appVersion }
              </span>
            )
          }
          {
            appConfig.routers.map(item => (
              <li key={item.path} className=" h-10 leading-10 p-2 ">
                <Link to={item.path} className=" flex items-center" activeProps={{ className: ' font-bold text-red-400' }}>
                  <i className={classix(item.icon, ' mr-2')} />
                  { item.title }
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="  flex-1 py-2 px-3 overflow-hidden">
          <header className=" text-right">
            <span className=" justify-end">
              <ThemeMode />
            </span>
          </header>
          { loading > 0 && 'loading...' }
          <Outlet />
        </div>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </div>
    </ThemeProvider>
  )
}
