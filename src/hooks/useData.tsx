import type { ResumeConfig, ResumeConfigKeys } from '~/api'
import { useQuery } from '@tanstack/react-query'
import { useLocalStorageState } from 'ahooks'
import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { resumeQueryOptions } from '~/api'

export interface DataLoading {
  isLoading: boolean
  data: ResumeConfig | undefined
  refetch: () => void
  confirmMessage: (renderKey: ResumeConfigKeys, data: any) => void
}

const DataContext = createContext<DataLoading | null>(null)

export default function DataContextProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useLocalStorageState<ResumeConfig | undefined>(
    'use-global-data',
    {
      defaultValue: undefined,
    },
  )

  const { isLoading, data, refetch: refreshData } = useQuery(resumeQueryOptions('zh', 'master', false))

  const confirmMessage = useCallback((renderKey: ResumeConfigKeys, data: any) => {
    setMessage(prevData => ({ ...prevData, [renderKey]: data }))
  }, [setMessage])

  useEffect(() => {
    if (data) {
      setMessage(data)
    }
  }, [data, setMessage])

  const value = useMemo(() => {
    return {
      isLoading,
      data: message,
      refetch: refreshData,
      confirmMessage,
    }
  }, [confirmMessage, isLoading, message, refreshData])

  return (
    <DataContext value={value}>
      { children }
    </DataContext>
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
