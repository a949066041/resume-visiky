import type { ZodTypeAny } from 'zod'

type RequestParams = Record<string, any>
type RequestBody = Record<string, any>

export const fetchClient = {
  async get<T>(url: string, params: (RequestParams | ZodTypeAny) = {}, schema?: ZodTypeAny) {
    if (typeof params.safeParse === 'function') {
      schema = params as ZodTypeAny
      params = {}
    }

    const res = await fetch(
      Object.keys(params).length > 0
        ? `${url}?${Object.entries(params).map(([k, v]) => `${k}=${v}`).join(',')}`
        : url,
    )

    const response = await res.json() as T

    if (import.meta.env.DEV && schema && response) {
      const res = schema.safeParse(response)
      if (!res.success) {
        console.error('get action value error', res)
      }
    }

    return response
  },
  async post<T>(url: string, body: RequestBody = {}, schema?: ZodTypeAny) {
    const res = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const response = await res.json() as T

    if (import.meta.env.DEV && schema && response) {
      const res = schema.safeParse(response)
      if (!res.success) {
        throw new Error(`post action res value error${res.data}`)
      }
    }

    return response
  },
  async delete<T>(url: string, params: (RequestParams | ZodTypeAny) = {}, schema?: ZodTypeAny) {
    if (typeof params.safeParse === 'function') {
      schema = params as ZodTypeAny
      params = {}
    }

    const res = await fetch(
      `${url}?${Object.entries(params).map(([k, v]) => `${k}=${v}`).join(',')}`,
      {
        method: 'delete',
      },
    )

    const response = await res.json() as T

    if (import.meta.env.DEV && schema && response) {
      const res = schema.safeParse(response)
      if (!res.success) {
        console.error('get action value error', res)
      }
    }

    return response
  },
}
