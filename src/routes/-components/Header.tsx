import { theme } from 'antd'
import React from 'react'
import LangSwitcher from '~/components/LangSwitcher'
import ModeSwitcher from '~/components/ModeSwitcher'

function Header() {
  const { token } = theme.useToken()
  return (
    <header className=" flex justify-end py-2 px-3  text-white" style={{ backgroundColor: token.colorPrimary }}>
      <span>
        <ModeSwitcher />
        <LangSwitcher />
      </span>
    </header>
  )
}

export default Header
