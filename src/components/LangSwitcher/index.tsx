import type { LangKeys } from '~/constant'
import { useNavigate } from '@tanstack/react-router'
import { Popover } from 'antd'
import clx from 'classix'
import { useTranslation } from 'react-i18next'
import { langList } from '~/constant'
import { useModeSwitcher } from '~/hooks'

function LangSwitcher() {
  const { i18n } = useTranslation()
  const navigate = useNavigate({ from: '/' })
  const { isEdit } = useModeSwitcher()

  function handleChangeLang(langKey: LangKeys) {
    i18n.changeLanguage(langKey)
    navigate({ search: { lang: langKey } })
  }

  return (
    <div className=" mx-[7px] inline-block text-xs">
      <Popover
        content={isEdit ? '编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存' : null}
        placement="left"
      >
        <span>
          {
            langList.map(item => (
              <span
                key={item.key}
                className={clx('cursor-pointer mx-1', i18n.language !== item.key && 'text-text-disabled')}
                onClick={() => handleChangeLang(item.key)}
                data-lang={item.key}
              >
                { item.label }
              </span>
            ))
          }
        </span>
      </Popover>
    </div>
  )
}

export default LangSwitcher
