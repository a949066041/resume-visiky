interface ITextRenderProps {
  text?: string
}

function TextRender({ text }: ITextRenderProps) {
  const textList = text?.split('\n')

  if (!text) {
    return null
  }

  return (
    <div className=" space-y-0.5 text-sm">
      {textList!.map(item => (<p key={item}>{item}</p>))}
    </div>
  )
}

export default TextRender
