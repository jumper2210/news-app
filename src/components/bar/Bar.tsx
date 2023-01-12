import React from 'react'
import './Bar.scss'

export const Bar = () => {
  return (
    <div className='bar'>
      <div className='bar__container'>
        <select className='bar__container--select'>
          <option value='1'>Polska</option>
          <option value='2'>Czechy</option>
          <option value='3'>Niemcy</option>
        </select>
      </div>
      <div className='bar__container'>
        <select className='bar__container--select'>
          <option value='1'>10</option>
          <option value='2'>20</option>
          <option value='3'>50</option>
        </select>
      </div>
    </div>
  )
}
