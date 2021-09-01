import React from 'react'

const NameField = ({ cityName, countryName }) => {
  return (
    <div className='city-name-display'>
      <p>
        {cityName}, {countryName}
      </p>
    </div>
  )
}

export default NameField
