import { theme } from 'antd'
import clx from 'classix'
import { useMemo } from 'react'
import Avatar from '~/components/Avatar'
import { profileConfig } from '~/constant'
import { SizeSpace, useGlobalData, useSize } from '~/hooks'

function ProfileItem({ icon, value }: { value?: string, icon?: string }) {
  const { token } = theme.useToken()
  return (
    <div className=" text-sm whitespace-nowrap space-x-2 items-center flex">
      <i className={clx(icon, ' text-sm')} style={{ color: token.colorPrimary }}></i>
      <span>{ value }</span>
    </div>
  )
}

function Profile() {
  const { data } = useGlobalData()
  const { size } = useSize()

  const profileList = useMemo(() => {
    if (!data?.profile) {
      return []
    }
    const profileValue = data.profile
    return profileConfig.map(([key, icon]) => ({ value: profileValue?.[key], icon, id: key }))
      .filter(item => item.value)
      .slice(0, 6)
  }, [data?.profile])

  return (
    <div className=" flex  justify-between items-center">
      <SizeSpace className=" flex-1" direction="vertical">
        <div className=" text-2xl ">{data?.profile?.name}</div>
        <div className=" grid grid-cols-2" style={{ gap: size * 2 }}>
          { profileList.map(item => (<ProfileItem key={item.id} {...item} />)) }
        </div>
      </SizeSpace>
      {
        !data?.avatar?.hidden && (
          <div className=" w-40">
            <div className=" w-20 h-20 mx-auto flex-none">
              <Avatar {...data?.avatar} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Profile
