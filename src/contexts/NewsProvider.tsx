import axios from 'axios'
import React, {
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react'
import { NewsContext, contextValue } from './NewsContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const useNewsContext = () => {
  return useContext(NewsContext)
}

export const NewsProvider = ({ children }: Props) => {
  const [news, setNews] = useState()

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=59f3d66401b74960b6d6bac9350d733d',
        {
          params: {},
        }
      )
      const { articles } = response?.data
      setNews(articles)
    } catch (err) {
      window.alert(`${err.response.data.message}. Please try again ..`)
    }
  }, [])

  const value = useMemo(
    () => ({
      news,
    }),
    [news]
  )

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
}
