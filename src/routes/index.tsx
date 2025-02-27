import { createFileRoute } from '@tanstack/react-router'
import { Affix, Alert, Button, Spin } from 'antd'
import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useReactToPrint } from 'react-to-print'
import z from 'zod'
import Drawer from '~/components/Drawer'
import { useGlobalData, useModeSwitcher, useRootSearch } from '~/hooks'
import Template from './-components/Template'

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
  const { params } = useRootSearch()
  const { user = 'visiky' } = params
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
  const { changeSearch, params } = useRootSearch()
  const { i18n } = useTranslation()
  const { isLoading, copyConfig } = useGlobalData()
  const { isEdit } = useModeSwitcher()

  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({ contentRef })

  const RenderTempate = useMemo(() => {
    return Template[params.template]
  }, [params.template])

  useEffect(() => {
    changeSearch({ lang: i18n.language })
  }, [changeSearch, i18n.language])

  return (
    <div className=" btn">
      <Spin spinning={isLoading}>
        { isEdit && <EditBanner /> }
        <div className="  mx-auto p-3 mb-10 flex w-full justify-center">
          <div ref={contentRef} className="min-h-[942px] w-3xl mr-2 ">
            <RenderTempate />
          </div>
          {
            isEdit && (
              <>
                <Affix offsetTop={0}>
                  <div className=" space-y-2 w-[106px]">
                    <Drawer />
                    <Button type="primary" block onClick={() => copyConfig()}>复制配置</Button>
                    <Button type="primary" block>保存简历</Button>
                    <Button block>导入配置</Button>
                    <Button type="primary" block onClick={() => reactToPrintFn()}>下载PDF</Button>
                    <Button type="primary" block>分享</Button>
                  </div>
                </Affix>
              </>
            )
          }

        </div>
      </Spin>
    </div>
  )
}
