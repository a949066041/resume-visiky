import type { ResumeConfig, ResumeConfigKeys } from '~/api'
import { useClipboard, useLocalStorage } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'
import { App } from 'antd'
import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { resumeQueryOptions } from '~/api'

export interface DataLoading {
  isLoading: boolean
  data: ResumeConfig | undefined
  refetch: () => void
  copyConfig: () => void
  confirmMessage: (renderKey: ResumeConfigKeys, data: any) => void
}

const DataContext = createContext<DataLoading | null>(null)

export default function DataContextProvider({ children }: { children: React.ReactNode }) {
  const [configValue, setConfigValue] = useLocalStorage<ResumeConfig | undefined>(
    {
      key: 'use-global-data',
      defaultValue: undefined,
    },
  )
  const clipboard = useClipboard({ timeout: 500 })
  const { message } = App.useApp()
  const { isLoading, data, refetch: refreshData } = useQuery(resumeQueryOptions('zh', 'master', !message))

  const confirmMessage = useCallback((renderKey: ResumeConfigKeys, data: any) => {
    setConfigValue(prevData => ({ ...prevData, [renderKey]: data }))
  }, [setConfigValue])

  useEffect(() => {
    if (data) {
      setConfigValue(data)
    }
  }, [data, setConfigValue])

  const copyConfig = useCallback(() => {
    clipboard.copy(JSON.stringify(configValue, null, 2))
    message.success('复制成功')
  }, [message, clipboard, configValue])

  const value = useMemo(() => {
    return {
      isLoading,
      data: configValue,
      copyConfig,
      refetch: refreshData,
      confirmMessage,
    }
  }, [isLoading, configValue, copyConfig, refreshData, confirmMessage])

  return (
    <DataContext.Provider value={value}>
      { children }
    </DataContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGlobalData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useGlobalData must be used within an DataContextProvider')
  }

  return context
}
