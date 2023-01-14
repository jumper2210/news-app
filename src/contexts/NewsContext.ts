import { createContext } from 'react'
type newsData = {
  title: string
  url: string
  description: string
  urlToImage: string
}

export interface contextValue {
  news: newsData[]
}

export const NewsContext = createContext<contextValue | null>(null)
