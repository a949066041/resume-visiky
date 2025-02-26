import { useNavigate, useSearch } from '@tanstack/react-router'

const ROOT_PATH = '/'

export function useRootSearch() {
  const navigate = useNavigate({ from: ROOT_PATH })
  const params = useSearch({ from: ROOT_PATH })

  function changeSearch(changeParams: Partial<typeof params>) {
    navigate({ search: { ...params, ...changeParams } })
  }

  return {
    params,
    changeSearch,
  }
}
