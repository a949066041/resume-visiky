import { useToggle } from 'ahooks'
import { Drawer as AntdDrawer, Button, Radio } from 'antd'
import { Templates } from '../Templates'

function Drawer() {
  const [visible, { set: setVisible }] = useToggle()

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
          title={(
            <Radio.Group>
              <Radio.Button value="template">
                选择模板
              </Radio.Button>
              <Radio.Button value="module">
                配置简历
              </Radio.Button>
            </Radio.Group>
          )}
          onClose={() => setVisible(false)}
        >
          <Templates />
        </AntdDrawer>
      </Button>
    </>
  )
}

export default Drawer
