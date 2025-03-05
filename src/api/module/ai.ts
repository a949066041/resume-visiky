export async function fetchAiText(text: string) {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${import.meta.env.PUBLIC_AI_API_KEY}`)
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('X-DashScope-SSE', 'enable')

  const response = await fetch(`https://dashscope.aliyuncs.com/api/v1/apps/${import.meta.env.PUBLIC_AI_APP_ID}/completion`, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      input: {
        prompt: text,
      },
      stream: true,
      parameters: {
        incremental_output: true,
      },
      debug: {},
    }),
    redirect: 'follow',
  })

  return response.body!
}
