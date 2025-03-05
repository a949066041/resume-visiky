import type { ResumeConfigKeys } from '~/api'
import { createContext, useCallback, useContext, useMemo } from 'react'
import { useGlobalData } from '~/hooks'

export interface TemplateAi {
  changeAiText: (renderKey: ResumeConfigKeys, data: any, changeIndex?: number) => void
}

const TemplateAiContext = createContext<TemplateAi | null>(null)

export function AiTemplateProvider({ children }: { children: React.ReactNode }) {
  const { confirmMessage, data: originData } = useGlobalData()

  const changeAiText = useCallback((renderKey: ResumeConfigKeys, data: any, changeIndex = -1) => {
    if (changeIndex !== -1) {
      const newData = originData![renderKey] as unknown[]
      newData[changeIndex] = data
      confirmMessage(renderKey, newData)
      return
    }
    confirmMessage(renderKey, data)
  }, [confirmMessage, originData])

  const valueContext = useMemo(() => {
    return {
      changeAiText,
    }
  }, [changeAiText])

  return (
    <TemplateAiContext.Provider value={valueContext}>
      {children}
    </TemplateAiContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAiTemplate() {
  const context = useContext(TemplateAiContext)
  if (!context) {
    throw new Error('useAiTemplate must be used within an DataContextProvider')
  }

  return context
}
