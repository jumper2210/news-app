import React from 'react'
import { Home } from './containers/home/Home'
import { FiltersProvider } from './contexts/Filters/FiltersProvider'

function App() {
  return (
    <FiltersProvider>
      <Home />
    </FiltersProvider>
  )
}
export default App
