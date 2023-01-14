import React, { useEffect } from 'react'
import './Home.scss'
import { Bar } from '../../components/bar/Bar'
import { News } from '../../components/news/News'

export const Home = () => {
  return (
    <main className='home'>
      <Bar />
      <News />
    </main>
  )
}
