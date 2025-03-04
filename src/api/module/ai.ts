const api_key = import.meta.env.PUBLIC_AI_API_KEY

export async function fetchAiText(text: string) {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${api_key}`)
  myHeaders.append('Content-Type', 'application/json')

  const response = await fetch(`${import.meta.env.PUBLIC_AI_BASE_URL}/v1/chat-messages`, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      inputs: {},
      query: text,
      response_mode: 'streaming',
      user: 'resume',
    }),
  })

  return response.body!
}
