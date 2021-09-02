import React from 'react'
import weatherSVG1 from '../../assets/icons/1.svg'
import weatherSVG2 from '../../assets/icons/2.svg'
import weatherSVG3 from '../../assets/icons/3.svg'
import weatherSVG4 from '../../assets/icons/4.svg'
import weatherSVG5 from '../../assets/icons/5.svg'
import weatherSVG6 from '../../assets/icons/6.svg'
import weatherSVG7 from '../../assets/icons/7.svg'
import weatherSVG8 from '../../assets/icons/8.svg'
import weatherSVG11 from '../../assets/icons/11.svg'
import weatherSVG12 from '../../assets/icons/12.svg'
import weatherSVG13 from '../../assets/icons/13.svg'
import weatherSVG14 from '../../assets/icons/14.svg'
import weatherSVG15 from '../../assets/icons/15.svg'
import weatherSVG16 from '../../assets/icons/16.svg'
import weatherSVG17 from '../../assets/icons/17.svg'
import weatherSVG18 from '../../assets/icons/18.svg'
import weatherSVG19 from '../../assets/icons/19.svg'
import weatherSVG20 from '../../assets/icons/20.svg'
import weatherSVG21 from '../../assets/icons/21.svg'
import weatherSVG22 from '../../assets/icons/22.svg'
import weatherSVG23 from '../../assets/icons/23.svg'
import weatherSVG24 from '../../assets/icons/24.svg'
import weatherSVG25 from '../../assets/icons/25.svg'
import weatherSVG26 from '../../assets/icons/26.svg'
import weatherSVG27 from '../../assets/icons/27.svg'
import weatherSVG30 from '../../assets/icons/30.svg'
import weatherSVG31 from '../../assets/icons/31.svg'
import weatherSVG32 from '../../assets/icons/32.svg'
import weatherSVG33 from '../../assets/icons/33.svg'
import weatherSVG34 from '../../assets/icons/34.svg'
import weatherSVG35 from '../../assets/icons/35.svg'
import weatherSVG36 from '../../assets/icons/36.svg'
import weatherSVG37 from '../../assets/icons/37.svg'
import weatherSVG38 from '../../assets/icons/38.svg'
import weatherSVG39 from '../../assets/icons/39.svg'
import weatherSVG40 from '../../assets/icons/40.svg'
import weatherSVG41 from '../../assets/icons/41.svg'
import weatherSVG42 from '../../assets/icons/42.svg'
import weatherSVG43 from '../../assets/icons/43.svg'
import weatherSVG44 from '../../assets/icons/44.svg'

const iconLookup = {
  1: weatherSVG1,
  2: weatherSVG2,
  3: weatherSVG3,
  4: weatherSVG4,
  5: weatherSVG5,
  6: weatherSVG6,
  7: weatherSVG7,
  8: weatherSVG8,
  11: weatherSVG11,
  12: weatherSVG12,
  13: weatherSVG13,
  14: weatherSVG14,
  15: weatherSVG15,
  16: weatherSVG16,
  17: weatherSVG17,
  18: weatherSVG18,
  19: weatherSVG19,
  20: weatherSVG20,
  21: weatherSVG21,
  22: weatherSVG22,
  23: weatherSVG23,
  24: weatherSVG24,
  25: weatherSVG25,
  26: weatherSVG26,
  27: weatherSVG27,
  30: weatherSVG30,
  31: weatherSVG31,
  32: weatherSVG32,
  33: weatherSVG33,
  34: weatherSVG34,
  35: weatherSVG35,
  36: weatherSVG36,
  37: weatherSVG37,
  38: weatherSVG38,
  39: weatherSVG39,
  40: weatherSVG40,
  41: weatherSVG41,
  42: weatherSVG42,
  43: weatherSVG43,
  44: weatherSVG44
}

const WeatherIconField = ({ weatherIcon }) => {
  console.log(weatherIcon)
  return (
    <div weather-icon-display>
      <img src={iconLookup[weatherIcon]} alt={weatherIcon} />
    </div>
  )
}

export default WeatherIconField
