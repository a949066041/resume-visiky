import type { ResumeConfig, ResumeConfigKeys } from '~/api'
import { App, message } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { useClipboard, useLocalStorage } from '@mantine/hooks'
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
  const clipboard = useClipboard({ timeout: 500 });
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

  const value = useMemo(() => {
    return {
      isLoading,
      data: configValue,
      copyConfig,
      refetch: refreshData,
      confirmMessage,
    }
  }, [confirmMessage, isLoading, message, refreshData, copyConfig])

  async function copyConfig() {
    clipboard.copy('Hello, world!')
    message.success('复制成功')
  }

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
