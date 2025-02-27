import type { GetProps } from 'antd'
import { Space } from 'antd'
import { createContext, useContext, useMemo, useState } from 'react'

export interface SizeValue {
  size: number
  setSize: (size: number) => void
  color: string
  setColor: (color: string) => void
}

const SizeContext = createContext<SizeValue | null>(null)

export default function SizeContextProvider({ children }: { children: React.ReactNode | ((params: SizeValue) => React.ReactNode) }) {
  const [size, setSize] = useState(4)
  const [color, setColor] = useState('#273f75')
  const value = useMemo<SizeValue>(() => {
    return {
      size,
      setSize,
      color,
      setColor,
    }
  }, [size, setSize, color, setColor])

  return (
    <SizeContext.Provider value={value}>
      { typeof children === 'function' ? children(value) : children }
    </SizeContext.Provider>
  )
}

export interface ISizeSpaceProps extends GetProps<typeof Space> {
  small?: boolean
}

export function SizeSpace({ children, className, small = false, ...consta }: ISizeSpaceProps) {
  const { size } = useSize()
  const newSize = useMemo(() => size * (small ? 1 : 2), [size, small])

  return (
    <Space size={newSize} className={className} {...consta}>
      { children }
    </Space>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSize() {
  const context = useContext(SizeContext)
  if (!context) {
    throw new Error('useSize must be used within an DataContextProvider')
  }

  return context
}
