import React, { useState, useEffect } from 'react'
import { getCity } from '../forecastAndCity'

const WeatherSearch = () => {
  const [locationInput, setLocationInput] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [weatherInfo, setWeatherInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationQuery(locationInput)
  }

  useEffect(() => {
    setWeatherInfo(getCity(locationQuery))
    console.log(weatherInfo)
  }, [locationQuery])

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='location'
          name='location'
          placeholder='Enter location'
          autoComplete='off'
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
      </form>
    </>
  )
}

export default WeatherSearch

// TODO
//? How to take the data gathered in the 'getWeather' function and store in an object
//?   --> how to pass down the props needed from getWeaher function to WeatherSearch component
//?

// input is stored in the locationInput state
// onSubmit fires the getCity fn with the locationInput passed in
// getCity gathers the .Key for that location object and passes it to getWeather fn
// this then makes another api call with the location.Key and return the weatherData object
//* need to be able to use the weatherInfo state as an object to make dynamic UI updates.
