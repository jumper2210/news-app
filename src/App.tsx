import React from 'react'
import { Home } from './containers/home/Home'
import { NewsProvider } from './contexts/NewsProvider'

function App() {
  return (
    <NewsProvider>
      <Home />
    </NewsProvider>
  )
}
export default App
