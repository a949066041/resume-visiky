import React from 'react'
import LangSwitcher from '~/components/LangSwitcher'
import ModeSwitcher from '~/components/ModeSwitcher'

function Header() {
  return (
    <header className=" flex justify-end py-2 px-3 bg-primary text-text-white">
      <span>
        <ModeSwitcher />
        <LangSwitcher />
      </span>
    </header>
  )
}

export default Header
