import { theme } from 'antd'
import clx from 'classix'
import { SizeSpace } from '~/hooks'

function WrapperSection({ children, title, show = true }: { children: React.ReactNode, title: string, show?: boolean }) {
  const { token } = theme.useToken()

  if (!show) {
    return null
  }

  return (
    <SizeSpace className=" w-full" direction="vertical">
      <div className=" flex items-center">
        <span className=" text-base font-bold " style={{ color: token.colorPrimary }}>{title}</span>
        <div
          className={clx('flex-1 items-center rounded-2xl opacity-45 ml-2')}
          style={{ backgroundColor: token.colorPrimary, height: '1px' }}
        >
        </div>
      </div>
      <SizeSpace direction="vertical" className=" w-full">
        { children }
      </SizeSpace>
    </SizeSpace>
  )
}

export default WrapperSection
