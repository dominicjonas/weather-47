import React from 'react'

const WeatherConditionField = ({ weatherCondition }) => {
  return (
    <div className='weather-condition-display'>
      <p>{weatherCondition}</p>
    </div>
  )
}

export default WeatherConditionField
