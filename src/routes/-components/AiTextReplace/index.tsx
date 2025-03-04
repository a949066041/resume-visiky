import type { MenuProps } from 'antd'
import { Bubble, XStream } from '@ant-design/x'
import { useToggle } from '@mantine/hooks'
import { Dropdown, Popconfirm } from 'antd'
import React, { useMemo } from 'react'
import { fetchAiText } from '~/api'
import TextRender from '~/components/TextRender'

export interface IAiCommonItemProps {
  onChangeAiText?: (key: string, newValue: string) => void
}

interface AiTextReplaceProps {
  text?: string
  onReplace?: (text: string) => void
}

function AiTextReplace({ text, onReplace }: AiTextReplaceProps) {
  const [lines, setLines] = React.useState<Record<string, string>[]>([])
  const content = lines.map(line => JSON.parse(line.data).answer).join('')

  const [open, toggleOpen] = useToggle()

  const items = useMemo<MenuProps['items']>(() => {
    return [
      {
        label: 'ai润色',
        key: 'renderAi',
      },
    ]
  }, [])

  const handleClickMenu: MenuProps['onClick'] = async (e) => {
    if (e.key === 'renderAi') {
      setLines([])
      toggleOpen(true)
      if (text) {
        for await (const chunk of XStream({
          readableStream: await fetchAiText(text),
        })) {
          setLines(pre => [...pre, chunk])
        }
      }
    }
  }

  function handleClose() {
    onReplace?.(content)
    toggleOpen(false)
  }

  return (
    <Popconfirm
      open={open}
      icon={false}
      title=""
      description={(
        <Bubble
          className="max-w-[700px] whitespace-pre-wrap"
          variant="outlined"
          content={content}
        />
      )}
      okText="替换"
      onConfirm={handleClose}
      onCancel={() => toggleOpen(false)}
      cancelText="否"
    >
      <span>
        <Dropdown menu={{ items, onClick: handleClickMenu }} trigger={['contextMenu']}>
          <span>
            <TextRender text={text} />
          </span>
        </Dropdown>
      </span>
    </Popconfirm>
  )
}

export default AiTextReplace
