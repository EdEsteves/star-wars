import React from 'react';

import LinkButton from '../../atoms/LinkButton'

import './styles.scss'

const btnData = {
  value: 'Planets',
  url: '/categories/planets',
  icon: 'faGlobeEurope'
}

const Menu = () => {
  return (
    <LinkButton btnInfo={btnData}/>
  )
}

export default Menu;