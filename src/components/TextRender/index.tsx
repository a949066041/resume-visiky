import clx from 'classix'

interface ITextRenderProps {
  text?: string
  className?: string
}

function TextRender({ text, className }: ITextRenderProps) {
  const textList = text?.split('\n')

  if (!text) {
    return null
  }

  return (
    <div className={clx('space-y-0.5 text-sm', className)}>
      {textList!.map(item => (<p key={item}>{item}</p>))}
    </div>
  )
}

export default TextRender
