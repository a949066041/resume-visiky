import { createFileRoute } from '@tanstack/react-router'
import { Affix, Button, Spin } from 'antd'
import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useReactToPrint } from 'react-to-print'
import z from 'zod'
import Drawer from '~/components/Drawer'
import { useGlobalData, useModeSwitcher, useRootSearch } from '~/hooks'
import EditBanner from './-components/EditBanner'
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
          <div ref={contentRef} className="min-h-[942px] w-[794px] mr-2 shadow-2xl print:shadow-[none]">
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
