import React from 'react'
import './News.scss'
export const News = () => {
  return (
    <div className='news'>
      <div className='news__title-wrapper'>
        <h2 className='news__title-wrapper-content'>
          Wyświetlono [pageSize] najnowszych wiadomości dla kraju: [country]
        </h2>
      </div>
      <div className='news__inner-wrapper'>
        <div className='news__inner-wrapper--child'>
          <h2 className='news__inner-wrapper--child--title'>{'title'}</h2>
          <div className='news__inner-wrapper--child--image-wrapper'>img</div>
          <div className='news__inner-wrapper--child--description-wrapper'>
            <p className='news__inner-wrapper--child--description-wrapper--content'>
              {'description'}
            </p>
          </div>
        </div>

        <div className='news__inner-wrapper--child'>
          <h2 className='news__inner-wrapper--child--title'>{'title'}</h2>
          <div className='news__inner-wrapper--child--image-wrapper'>img</div>
          <div className='news__inner-wrapper--child--description-wrapper'>
            <p className='news__inner-wrapper--child--description-wrapper--content'>
              {'description'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
