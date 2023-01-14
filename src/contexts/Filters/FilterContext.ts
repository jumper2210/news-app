import { createContext } from 'react'
import { Language } from '../../types'

export interface FiltersProps {
  pageSize: number
  language: Language
}

export interface ContextValue {
  language: Language
  pageSize: number
  setParams: (filterProps: FiltersProps) => void
}

export const FiltersContext = createContext<ContextValue | null>(null)
