import React from 'react'
import plogo from '../../assets/images/pexelslogo.png'
import alogo from '../../assets/images/acculogo.png'
import glogo from '../../assets/images/github.png'

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <a
        href='https://www.pexels.com/api/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={plogo} alt='pexels api' />
      </a>
      <a
        href='https://developer.accuweather.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={alogo} alt='accu weather api' />
      </a>
      <a
        href='https://github.com/dominicjonas/sei-ga-project-2'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={glogo} alt='github profile' />
      </a>
    </footer>
  )
}

export default Footer
