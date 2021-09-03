import React from 'react'
import plogo from '../../assets/images/pexelslogo.png'
import alogo from '../../assets/images/acculogo.png'

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <a href='https://www.pexels.com/api/' target='_blank' rel='noopener noreferrer'>
        <img src={plogo} alt='' />
      </a>
      <a
        href='https://developer.accuweather.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={alogo} alt='' />
      </a>
    </footer>
  )
}

export default Footer
