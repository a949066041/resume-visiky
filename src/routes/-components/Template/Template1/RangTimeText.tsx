import { theme } from 'antd'
import clx from 'classix'
import { useMemo } from 'react'

function RangTimeText({ time, className }: { time?: [string | undefined, string | number], className?: string }) {
  const { token } = theme.useToken()
  const [start, end] = time!

  const wrapperText = useMemo(() => {
    return clx(className, ' text-xs')
  }, [className])

  if (!time) {
    return null
  }

  return (
    <div style={{ color: token.colorTextDescription }} className={wrapperText}>
      {start}
      {end ? ` ~ ${end}` : '至今'}
    </div>
  )
}

export default RangTimeText
