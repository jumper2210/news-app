import React from 'react'
import './News.scss'
import { NewsData } from '../../types'
import { useFiltersContext } from '../../contexts/Filters/FiltersProvider'
import { getCorrectCountryName } from '../../utils/getCorrectCountryName'
import noImage from '../../assets/noImg.png'

interface NewsDataProps {
  articles: [NewsData]
}

export const News: React.FC<NewsDataProps> = (props: NewsDataProps) => {
  const { articles } = props
  const { pageSize, language } = useFiltersContext()
  const countryName = getCorrectCountryName(language)

  return (
    <div className='news'>
      <div className='news__title-wrapper'>
        <h1 className='news__title-wrapper--content'>
          {`Displayed are the ${pageSize} most recent news items for the: ${countryName}`}
        </h1>
      </div>
      <div className='news__inner-wrapper'>
        {articles &&
          articles.map(({ content, title, urlToImage, url }, key) => (
            <div className='news__inner-wrapper--child' key={key}>
              <h2 className='news__inner-wrapper--child--title'>{title}</h2>
              <div
                className='news__inner-wrapper--child--image-wrapper'
                onClick={() => {
                  window.open(url, '_blank')?.focus()
                }}
              >
                <img
                  className='news__inner-wrapper--child--image-wrapper--content'
                  src={urlToImage ? urlToImage : noImage}
                />
              </div>
              <div className='news__inner-wrapper--child--description-wrapper'>
                <p className='news__inner-wrapper--child--description-wrapper--content'>
                  {content &&
                    content.split(' ').reduce((acc, current) => {
                      if (acc.length < 60) {
                        return acc + ' ' + current
                      } else {
                        return acc
                      }
                    }, '')}
                  ...
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
