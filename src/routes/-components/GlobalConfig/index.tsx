import { useToggle } from '@mantine/hooks'
import { ColorPicker, Drawer, FloatButton, Form, Input, Slider } from 'antd'
import { useSize } from '~/hooks'

function GlobalConfig() {
  const [open, toggleOpen] = useToggle()
  const { size, setSize, color, setColor } = useSize()

  return (
    <>
      <FloatButton icon={<i className="icon-[icon-park-outline--setting-two]" />} onClick={() => toggleOpen(true)} />
      <Drawer title="配置" onClose={() => toggleOpen(false)} open={open}>
        <Form layout="vertical">
          <Form.Item label="样式间距">
            <Slider value={size} onChange={setSize} min={4} max={6} />
          </Form.Item>
          <Form.Item label="主题颜色">
            <ColorPicker value={color} onChange={(_, color) => setColor(color)} trigger="click" />
          </Form.Item>
          <Form.Item label="Ai应用Id">
            <Input />
          </Form.Item>
          <Form.Item label="Ai应用key">
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default GlobalConfig
