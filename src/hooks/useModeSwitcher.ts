import { useNavigate, useSearch } from '@tanstack/react-router'
import { useMemo } from 'react'

export function useModeSwitcher() {
  const navigate = useNavigate({ from: '/' })
  const { mode, user } = useSearch({ from: '/' })

  const canPreview = useMemo(() => {
    return !!user
  }, [user])

  function changeMode(changeMode: 'read' | 'edit') {
    if (mode === changeMode) {
      return
    }
    navigate({
      search: {
        mode: changeMode,
      },
    })
  }

  return {
    canPreview,
    isEdit: mode === 'edit',
    changeMode,
  }
}
