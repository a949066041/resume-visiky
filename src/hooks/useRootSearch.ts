import { useNavigate, useSearch } from '@tanstack/react-router'

export function useRootSearch() {
  const navigate = useNavigate({ from: '/' })
  const params = useSearch({ from: '/' })

  function changeSearch(changeParams: Partial<typeof params>) {
    navigate({ search: { ...params, ...changeParams } })
  }

  return {
    params,
    changeSearch,
  }
}
