import React from 'react'

import Logo from '../../atoms/Logo'
import LinkButton from '../../atoms/LinkButton'

import './styles.scss'

const Start = () => {
  const btnData = {
    value: 'Start',
    url: '/categories',
    icon: ''
  }
  return(
    <div className='starwars-start__container'>
      <Logo />
      <LinkButton btnInfo={btnData} />
    </div>
  )
}

export default Start