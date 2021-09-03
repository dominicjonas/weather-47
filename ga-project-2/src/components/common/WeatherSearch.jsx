import React, { useState, useEffect } from 'react'
import { getCity, getWeather } from '../../lib/accuWeatherApi'
import { getPhotos } from '../../lib/pexelsApi'
import DateField from '../fields/DateField.jsx'
import NameField from '../fields/NameField'
import TimeField from '../fields/TimeField'
import WeatherConditionField from '../fields/WeatherConditionField'
import WeatherIconField from '../fields/WeatherIconField'
import TemperatureField from '../fields/TemperatureField'

const WeatherSearch = () => {
  const [locationInput, setLocationInput] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [cityInfo, setCityInfo] = useState(null)
  const [photoUrl, setPhotoUrl] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationQuery(locationInput)
  }

  useEffect(() => {
    if (!locationQuery) {
      return
    }
    getCity(locationQuery)
      .then((cityInfo) => {
        if (cityInfo) {
          setCityInfo(cityInfo)
          console.log({ cityInfo })
          return getWeather(cityInfo.Key)
        }
        return cityInfo
      })
      .then((weather) => {
        setWeatherInfo(weather)
        setLocationInput('')
        console.log({ weather })
      })
  }, [locationQuery])

  useEffect(() => {
    getPhotos(locationQuery).then((photoInfo) => {
      const imgSrc = photoInfo
      setPhotoUrl(imgSrc)
    })
  }, [locationQuery])

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='location'
          name='location'
          autoComplete='off'
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <label htmlFor='location' className='label-name'>
          <span className='content-name'>Enter a city</span>
        </label>
      </form>
      {weatherInfo && cityInfo && (
        <div
          className={
            weatherInfo.IsDayTime
              ? 'weather-container day-container'
              : 'weather-container night-container'
          }
        >
          <>
            <TemperatureField temperature={weatherInfo.Temperature.Metric.Value} />
            <WeatherIconField weatherIcon={weatherInfo.WeatherIcon} />
            <NameField
              cityName={cityInfo.LocalizedName ? cityInfo.LocalizedName : locationQuery}
              countryName={cityInfo.Country.EnglishName}
            />
            <WeatherConditionField weatherCondition={weatherInfo.WeatherText} />
            <TimeField
              GMTOffset={cityInfo.TimeZone.GmtOffset}
              cityName={locationQuery}
              epochTime={weatherInfo.EpochTime}
            />
            <DateField date={weatherInfo.LocalObservationDateTime} />
          </>
        </div>
      )}
      <div className='pexels-img'>
        <img src={photoUrl} alt='' />
      </div>
    </>
  )
}

export default WeatherSearch

// TODO 1
//? How to take the data gathered in the 'getWeather' function and store in an object
//?   --> how to pass down the props needed from getWeaher function to WeatherSearch component
//?

// input is stored in the locationInput state
// onSubmit fires the getCity fn with the locationInput passed in
// getCity gathers the .Key for that location object and passes it to getWeather fn
// this then makes another api call with the location.Key and return the weatherData object
//* need to be able to use the weatherInfo state as an object to make dynamic UI updates.

// TODO 2
//? catch input errors
//? style the weather card
//? dynamic background based off night/day etc
//? weather icons to use with WeatherIcon value --> netnin
//? light / dark theme
//? on figma -> design desktop / mobile view

//? use cityInfo.LocalizedName as a parameter to fetch api call from pexels

// first, the form submit stores the location state
// this is fed into the getCity function to retrieve a unique city key
// that key is fed into the getWeather function as an id , which return the weather data
// all this is run inside the useEffect which fires when the locationQuery state is populated

// TODO 3
//? weather card styling -> glassmorphism?
//? weathericon styling
//? use IsDayTime to alter background state
//? Timefield -> moment.js
//? pexels api image styling
//? form input styling
//? responsive
