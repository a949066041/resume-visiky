import Avatar from '~/components/Avatar'
import { useGlobalData } from '~/hooks'

function Template1() {
  const { data } = useGlobalData()
  return (
    <div>
      <div className=" w-20 h-20">
        <Avatar {...data?.avatar} />
      </div>
    </div>
  )
}

export default Template1
