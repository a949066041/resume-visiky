import type { ModeKeys } from '~/constant'
import { useMemo } from 'react'
import { useRootSearch } from './useRootSearch'

export function useModeSwitcher() {
  const { params, changeSearch } = useRootSearch()

  const canPreview = useMemo(() => {
    return !!params.user
  }, [params.user])

  function changeMode(changeMode: ModeKeys) {
    if (params.mode === changeMode) {
      return
    }
    changeSearch({
      mode: changeMode,
    })
  }

  return {
    canPreview,
    isEdit: params.mode === 'edit',
    changeMode,
  }
}
