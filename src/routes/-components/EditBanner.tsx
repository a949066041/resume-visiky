import { Alert } from 'antd'
import { useRootSearch } from '~/hooks'

function EditBanner() {
  const { params } = useRootSearch()
  const { user = 'visiky' } = params
  return (
    <Alert
      type="info"
      banner
      closable
      showIcon={false}
      message={(
        <span>
          编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存
          <span>
            <span style={{ marginRight: '4px' }}>
              👉
              {' '}
              {!user && '参考：'}
            </span>
            <span
              style={{
                color: `var(--primary-color, #1890ff)`,
                cursor: 'pointer',
              }}
              onClick={() => {
                window.open(`https://github.com/${user}/${user}`)
              }}
            >
              {`${user}'s resumeInfo`}
            </span>
            <span>
              {`（https://github.com/${user}/${
                user || 'visiky'
              }/blob/${'master'}/resume.json）`}
            </span>
          </span>
        </span>
      )}
    />
  )
}

export default EditBanner
