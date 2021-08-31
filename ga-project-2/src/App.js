import React from 'react'
import './styles/app.css'

import Header from './components/Header'
import WeatherSearch from './components/WeatherSearch'

function App() {
  return (
    <div className='App'>
      <Header />
      <WeatherSearch />
    </div>
  )
}

export default App
