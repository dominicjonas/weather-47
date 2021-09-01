import React from 'react'

const TemperatureField = ({ temperature }) => {
  return (
    <div className='temp-display'>
      <p>
        {temperature} <span>°</span>
      </p>
    </div>
  )
}

export default TemperatureField
