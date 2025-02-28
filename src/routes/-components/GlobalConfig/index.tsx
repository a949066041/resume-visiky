import { useToggle } from '@mantine/hooks'
import { ColorPicker, Drawer, FloatButton, Slider } from 'antd'
import { useSize } from '~/hooks'

function GlobalConfig() {
  const [open, toggleOpen] = useToggle()
  const { size, setSize, color, setColor } = useSize()

  return (
    <>
      <FloatButton icon={<i className="icon-[icon-park-outline--setting-two]" />} onClick={() => toggleOpen(true)} />
      <Drawer title="配置" onClose={() => toggleOpen(false)} open={open}>
        <Slider value={size} onChange={setSize} min={4} max={6} />
        <ColorPicker value={color} onChange={(_, color) => setColor(color)} trigger="click" />
      </Drawer>
    </>
  )
}

export default GlobalConfig
