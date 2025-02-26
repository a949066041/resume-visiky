import type { Schema } from 'form-render'
import type { ResumeConfigKeys } from '~/api'
import { useToggle } from '@mantine/hooks'
import { Collapse, Drawer } from 'antd'
import { useMemo, useState } from 'react'
import { moduleList } from '~/constant'
import formSchemaConfig from '~/constant/schema'
import FormCreator from '../FormCreator'
import ModuleContentChildren from './ModeuleContentChildren'

const formList = moduleList()

function ModuleContent() {
  const [renderKey, setRenderKey] = useState<ResumeConfigKeys>(null!)
  const [visible, setVisible] = useToggle()
  const [currentSchema, setCurrentSchema] = useState<Schema | null>(null)
  const [listIndex, setListIndex] = useState(0)

  const formSchema = useMemo(() => {
    if (!renderKey) {
      return null
    }
    return formList!.find(item => item.key === renderKey)
  }, [renderKey])

  function handleConfigDrawer(key: ResumeConfigKeys, listIndex = 0) {
    setRenderKey(key)
    setListIndex(listIndex)
    setCurrentSchema(formSchemaConfig[key])

    setVisible(true)
  }

  return (
    <>
      <Collapse
        accordion
        items={moduleList(handleConfigDrawer)?.map(item => ({
          ...item,
          children: (
            <ModuleContentChildren
              key={item.key}
              onConfig={listIndex => handleConfigDrawer(item.key as ResumeConfigKeys, listIndex)}
              parentKey={item.key as ResumeConfigKeys}
            />
          ),
        }))}
        bordered={false}
      />
      <Drawer
        closable={false}
        open={visible}
        onClose={() => setVisible(false)}
        title={formSchema?.label}
      >
        <FormCreator schema={currentSchema!} schemaKey={renderKey} listIndex={listIndex} onClose={() => setVisible(false)} />
      </Drawer>
    </>
  )
}

export default ModuleContent
