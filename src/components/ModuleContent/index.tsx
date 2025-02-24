import type { ResumeConfigKeys } from '~/api'
import type { ConfigSchema } from '~/constant/schema'
import { useToggle } from 'ahooks'
import { Collapse, Drawer } from 'antd'
import { useMemo, useRef, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { moduleList } from '~/constant'
import formSchemaConfig from '~/constant/schema'
import FormCreator from '../FormCreator'
import ModuleContentChildren from './ModeuleContentChildren'

const formList = moduleList()

function ModuleContent() {
  const [renderKey, setRenderKey] = useState<ResumeConfigKeys>(null!)
  const [visible, { set: setVisible }] = useToggle()
  const [currentSchema, setCurrentSchema] = useState<ConfigSchema>({ form: { }, ui: {} })

  const formSchema = useMemo(() => {
    if (!renderKey) {
      return null
    }
    return formList!.find(item => item.key === renderKey)
  }, [renderKey])

  function handleConfigDrawer(key: ResumeConfigKeys) {
    setRenderKey(key)
    setVisible(true)
    setCurrentSchema(formSchemaConfig[key])
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Collapse accordion items={moduleList(handleConfigDrawer)?.map((item) => ({
        ...item, children: <ModuleContentChildren parentKey={item.key as ResumeConfigKeys} /> }))} bordered={false} />
      <Drawer
        closable={false}
        open={visible}
        onClose={() => setVisible(false)}
        title={formSchema?.label}
      >
        <FormCreator schema={currentSchema} schemaKey={renderKey} />
      </Drawer>
    </DndProvider>
  )
}

export default ModuleContent
