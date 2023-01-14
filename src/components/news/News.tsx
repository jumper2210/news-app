import React from 'react'
import './News.scss'
import { useNewsContext } from '../../contexts/NewsProvider'

export const News = () => {
  const { news } = useNewsContext()
  console.log(news)
  return (
    <div className='news'>
      <div className='news__title-wrapper'>
        <h1 className='news__title-wrapper--content'>
          Wyświetlono [pageSize] najnowszych wiadomości dla kraju: [country]
        </h1>
      </div>
      <div className='news__inner-wrapper'>
        {news &&
          news.map(({ description, title, urlToImage }) => (
            <div className='news__inner-wrapper--child'>
              <h2 className='news__inner-wrapper--child--title'>{title}</h2>
              <div className='news__inner-wrapper--child--image-wrapper'>
                <img
                  className='news__inner-wrapper--child--image-wrapper--content'
                  src={urlToImage}
                />
              </div>
              <div className='news__inner-wrapper--child--description-wrapper'>
                <p className='news__inner-wrapper--child--description-wrapper--content'>
                  {description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
