import { theme } from 'antd'
import clx from 'classix'

function WrapperSection({ children, title }: { children: React.ReactNode, title: string }) {
  const { token } = theme.useToken()
  return (
    <section className=" space-y-2">
      <div className=" flex items-center">
        <span className="text-sm font-bold " style={{ color: token.colorPrimary }}>{title}</span>
        <div className={clx('flex-1 items-center rounded-2xl opacity-45 ml-2')} style={{ backgroundColor: token.colorPrimary, height: '1px' }}></div>
      </div>
      <div className=" space-y-2">
        { children }
      </div>
    </section>
  )
}

export default WrapperSection
