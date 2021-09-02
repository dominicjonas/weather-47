import React from 'react'
import weatherSVG from '../../assets/icons/1.svg'

const WeatherIconField = ({ weatherIcon }) => {
  // const svgIcon = `${name}.svg`
  console.log(weatherIcon)

  return (
    <div weather-icon-display>
      <img src={weatherSVG} alt='' />
    </div>
  )
}

export default WeatherIconField

//TODO
//? dynamically change the file of svg imported depending on the weatherIcon
//? if i remove     xmlns='http://www.w3.org/2000/svg'
//?                 xmlns:xlink='http://www.w3.org/1999/xlink'
//?                 xml:space='preserve'
//? then it works, only if hardcoded. Thought about making an individual component for each svg , but they have to start with a number to link with the weatherIcon api output
