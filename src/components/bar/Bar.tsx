import React from 'react'
import './Bar.scss'
import { Language, pageSize as PageSizeOption } from '../../types'
import { useFiltersContext } from '../../contexts/Filters/FiltersProvider'

export const Bar = () => {
  const filterContextState = useFiltersContext()

  return (
    <div className='bar'>
      <div className='bar__container'>
        <select
          value={filterContextState.language}
          className='bar__container--select'
          onChange={(event) =>
            filterContextState.setParams({
              ...filterContextState,
              language: event.target.value as Language,
            })
          }
        >
          <option value={Language.pl} key={Language.pl}>
            {Language.pl}
          </option>
          <option value={Language.cz} key={Language.cz}>
            {Language.cz}
          </option>
          <option value={Language.de} key={Language.de}>
            {Language.de}
          </option>
        </select>
      </div>
      <div className='bar__container'>
        <select
          value={filterContextState.pageSize}
          className='bar__container--select'
          onChange={(event) =>
            filterContextState.setParams({
              ...filterContextState,
              pageSize: +event.target.value,
            })
          }
        >
          {PageSizeOption.map((size) => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
