import React from 'react'

const TemperatureField = ({ temperature }) => {
  return (
    <div className='temp-display'>
      <p>
        {temperature} <span>°C</span>
      </p>
    </div>
  )
}

export default TemperatureField
