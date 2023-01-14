import React, { useCallback, useEffect, useState } from 'react'
import './Home.scss'
import { Bar } from '../../components/bar/Bar'
import { News } from '../../components/news/News'
import { Language, NewsData } from '../../types'
import { useFiltersContext } from '../../contexts/Filters/FiltersProvider'
import axios from 'axios'

export const Home = () => {
  const { language, pageSize } = useFiltersContext()
  const [articles, setArticles] = useState<[NewsData]>()

  useEffect(() => {
    fetchNews(language, pageSize)
  }, [language, pageSize])

  const fetchNews = useCallback(
    async (language: Language, pageSize: number) => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: language,
              pageSize: pageSize,
              apiKey: process.env.API_KEY,
            },
          }
        )
        const { articles } = response?.data
        setArticles(articles)
      } catch (err) {
        window.alert(`${err.response.data.message}. Please try again ..`)
      }
    },
    [language, pageSize]
  )

  return (
    <main className='home'>
      <Bar />
      <News articles={articles} />
    </main>
  )
}
