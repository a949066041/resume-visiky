import { useToggle } from '@mantine/hooks'
import { Drawer as AntdDrawer, Button, Segmented } from 'antd'
import { useState } from 'react'
import ModuleContent from '../../routes/-components/ModuleContent'
import TemplatesPreview from '../TemplatesPreview'

function Drawer() {
  const [visible, setVisible] = useToggle()
  const [type, setType] = useState<'template' | 'module'>('template')

  return (
    <>
      <Button
        type="primary"
        block
        onClick={() => setVisible(true)}
      >
        进行配置
        <AntdDrawer
          open={visible}
          closable={false}
          width={600}
          title={(
            <Segmented
              value={type}
              onChange={setType}
              shape="round"
              options={[
                { value: 'template', label: '选择模板' },
                { value: 'module', label: '配置简历' },
              ]}
            />
          )}
          onClose={() => setVisible(false)}
        >
          { type === 'module' ? <ModuleContent /> : <TemplatesPreview /> }
        </AntdDrawer>
      </Button>
    </>
  )
}

export default Drawer
