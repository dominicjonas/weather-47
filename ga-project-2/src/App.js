import React from 'react'
import './styles/app.css'

import Header from './components/common/Header'
import WeatherSearch from './components/common/WeatherSearch'
import Footer from './components/common/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <WeatherSearch />
      <Footer />
    </div>
  )
}

export default App
