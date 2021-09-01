import React from 'react'
import weatherSVG from '../../assets/icons/1.svg'

const WeatherIconField = ({ weatherIcon }) => {
  // const svgIcon = `${weatherIcon}.svg`

  return (
    <div>
      <img src={weatherSVG} alt='' />
    </div>
  )
}

export default WeatherIconField

//TODO
//? dynamically change the file of svg imported depending on the weatherIcon
