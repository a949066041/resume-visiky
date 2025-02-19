import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { Alert, Spin } from 'antd'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import z from 'zod'
import { resumeQueryOptions } from '~/api'
import { useModeSwitcher } from '~/hooks'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: z.object({
    user: z.string().optional(),
    template: z.string().default('template1'),
    lang: z.string().default('zh'),
    mode: z.enum(['edit', 'read']).default('read'),
  }),
})

function EditBanner() {
  const { user = 'visiky' } = useSearch({ from: '/' })
  return (
    <Alert
      type="warning"
      banner
      closable={false}
      showIcon={false}
      message={(
        <span>
          编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存
          <span>
            <span style={{ marginRight: '4px' }}>
              👉
              {' '}
              {!user && '参考：'}
            </span>
            <span
              style={{
                color: `var(--primary-color, #1890ff)`,
                cursor: 'pointer',
              }}
              onClick={() => {
                window.open(`https://github.com/${user}/${user}`)
              }}
            >
              {`${user}'s resumeInfo`}
            </span>
            <span>
              {`（https://github.com/${user}/${
                user || 'visiky'
              }/blob/${'master'}/resume.json）`}
            </span>
          </span>
        </span>
      )}
    />
  )
}

function RouteComponent() {
  const { i18n } = useTranslation()
  const navigate = Route.useNavigate()

  const { isEdit } = useModeSwitcher()
  const { template, user } = Route.useSearch()

  useEffect(() => {
    navigate({ search: { lang: i18n.language } })
  }, [i18n.language, navigate])

  const { isLoading } = useQuery(resumeQueryOptions(i18n.language, 'master', user))

  return (
    <div className=" btn">
      <Spin spinning={isLoading}>
        { isEdit && <EditBanner /> }
        <div className="  mx-auto p-3 w-3xl mb-10">
          <div className="min-h-[942px] shadow-lg ">
            123
          </div>
        </div>
      </Spin>
    </div>
  )
}
