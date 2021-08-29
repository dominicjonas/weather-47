import React, { useState } from 'react'
import { getCity } from '../forecastAndCity'

const WeatherSearch = () => {
  const [location, setLocation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    getCity(location)
    console.log(location)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='location'
          name='location'
          placeholder='Enter location'
          autoComplete='off'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
    </>
  )
}

export default WeatherSearch
