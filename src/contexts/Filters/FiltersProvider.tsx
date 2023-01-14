import React, { useContext, useMemo, useState } from 'react'
import { Language } from '../../types'
import { FiltersContext, FiltersProps } from './FilterContext'

interface FiltersProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const setFilters = (filtersProps: FiltersProps) => {
    localStorage.setItem(
      'filters',
      JSON.stringify({
        pageSize: filtersProps.pageSize,
        language: filtersProps.language,
      })
    )
    setParams({
      ...params,
      pageSize: filtersProps.pageSize,
      language: filtersProps.language,
    })
  }

  const paramsFromLocalStorage: Partial<FiltersProps> = localStorage['filters']
    ? JSON.parse(localStorage['filters'])
    : ''
  const initState = {
    language:
      (paramsFromLocalStorage?.language as Language) || ('pl' as Language),
    pageSize: paramsFromLocalStorage.pageSize || 10,
    setParams: setFilters,
  }

  const [params, setParams] = useState(initState)

  const value = useMemo(
    () => ({
      params,
    }),
    [params]
  )

  return (
    <FiltersContext.Provider value={value.params}>
      {children}
    </FiltersContext.Provider>
  )
}
