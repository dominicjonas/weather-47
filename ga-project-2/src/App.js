import React from 'react'
import './styles/app.css'

import Header from './components/common/Header'
import WeatherSearch from './components/common/WeatherSearch'

function App() {
  return (
    <div className='App'>
      <Header />
      <WeatherSearch />
    </div>
  )
}

export default App
