import { Popover } from 'antd'
import { useModeSwitcher } from '~/hooks'

function ModeSwitcher() {
  const { changeMode, isEdit, canPreview } = useModeSwitcher()

  return (
    <div className=" mx-2 inline-block text-xs text-white">
      {
        !isEdit && (
          <span onClick={() => changeMode('edit')} className=" cursor-pointer">编辑</span>
        )
      }
      {
        isEdit
        && (canPreview
          ? (
              <Popover content="无用户信息，不允许预览">
                <span className=" cursor-pointer">预览</span>
              </Popover>
            )
          : <span onClick={() => changeMode('read')} className=" cursor-pointer">预览</span>)
      }
    </div>
  )
}

export default ModeSwitcher
