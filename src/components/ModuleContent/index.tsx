import { useToggle } from 'ahooks'
import { Collapse, Drawer } from 'antd'
import { useMemo, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { moduleList } from '~/constant'
import FormCreator from '../FormCreator'

const formList = moduleList()

function ModuleContent() {
  const [renderKey, setRenderKey] = useState<string>('')
  const [visible, { set: setVisible }] = useToggle()

  const formSchema = useMemo(() => {
    if (!renderKey) {
      return null
    }
    return formList!.find(item => item.key === renderKey)
  }, [renderKey])

  function handleConfigDrawer(key: string) {
    setRenderKey(key)
    setVisible(true)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Collapse accordion items={moduleList(handleConfigDrawer)} bordered={false} />
      <Drawer closable={false} open={visible} onClose={() => setVisible(false)} title={formSchema?.label}>
        <FormCreator />
      </Drawer>
    </DndProvider>
  )
}

export default ModuleContent
