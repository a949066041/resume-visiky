import { useNavigate, useSearch } from '@tanstack/react-router'
import { Popover } from 'antd'
import clx from 'classix'
import { useTranslation } from 'react-i18next'
import { langList } from '~/setup/i18n.setup'

function RadioChangeLangeuage({ changeLang }: { changeLang: (lang: string) => void }) {
  const { i18n } = useTranslation()
  return (
    <span>
      {
        langList.map(item => (
          <span
            key={item.key}
            className={clx('cursor-pointer mx-1', i18n.language !== item.key && 'text-text-disabled')}
            onClick={() => changeLang(item.key)}
            data-lang={item.key}
          >
            { item.label }
          </span>
        ))
      }
    </span>
  )
}

function LangSwitcher() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate({ from: '/' })
  const { template, user, mode } = useSearch({ from: '/' })

  function handleChangeLang(langKey: string) {
    i18n.changeLanguage(langKey)
    navigate({ search: { template, lang: langKey, user, mode } })
  }

  return (
    <div className=" mx-[7px] inline-block text-xs">
      {
        mode === 'edit'
          ? (
              <Popover
                content={t('编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存')}
                placement="left"
              >
                <span>
                  <RadioChangeLangeuage changeLang={handleChangeLang} />
                </span>
              </Popover>
            )
          : <RadioChangeLangeuage changeLang={handleChangeLang} />
      }
    </div>
  )
}

export default LangSwitcher
