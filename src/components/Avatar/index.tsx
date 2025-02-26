import type { ResumeConfig } from '~/api'
import { Avatar as AntdAvatar } from 'antd'

function Avatar({ src, shape = 'circle', hidden }: Required<ResumeConfig>['avatar']) {
  if (hidden) {
    return null
  }
  return (
    <>
      {
        src
          ? (
              <AntdAvatar
                className=" !w-full !h-full"
                shape={shape as unknown as 'square' | 'circle'}
                src={src}
              />
            )
          : <span className="avatar-upload-tip">头像地址为空</span>
      }
    </>
  )
}

export default Avatar
