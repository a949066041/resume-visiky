import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { Affix, Alert, Button, Spin } from 'antd'
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

  const { isLoading, data } = useQuery(resumeQueryOptions(i18n.language, 'master', 'visiky'))

  return (
    <div className=" btn">
      <Spin spinning={isLoading}>
        { isEdit && <EditBanner /> }
        <div className="  mx-auto p-3 mb-10 flex w-full justify-center">
          <div className="min-h-[942px]  w-3xl shadow-lg mr-2 ">
            123
            { JSON.stringify(data) }
          </div>
          <>
            <Affix offsetTop={0}>
              <div className=" space-y-2 w-[106px]">
                <Button type="primary" block>进行配置</Button>
                <Button type="primary" block>复制配置</Button>
                <Button type="primary" block>保存简历</Button>
                <Button block>导入配置</Button>
                <Button type="primary" block>下载PDF</Button>
                <Button type="primary" block>分享</Button>
              </div>
            </Affix>
          </>
        </div>
      </Spin>
    </div>
  )
}
