import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'
import { ThemeContext, Themes } from '.'

interface ThemeProviderProps {
  children: ReactNode
  disabled?: boolean
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, disabled = false } = props
  const { isDarkMode, toggle, set } = useDarkMode({
    initializeWithValue: false,
  })

  useEffect(() => {
    if (disabled)
      return
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode, disabled])

  return (
    <ThemeContext
      value={{
        toggle,
        set,
        themeName: isDarkMode ? Themes.DARK : Themes.LIGHT,
      }}
    >
      {children}
    </ThemeContext>
  )
}
