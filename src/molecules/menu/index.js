import React from 'react';

import LinkButton from '../../atoms/LinkButton'


const btnData = {
  value: 'Planets',
  url: '/categories/planets',
  icon: 'faGlobeEurope',
  class: 'starwars__menu-item'
}

const Menu = () => {
  return (
    <LinkButton btnInfo={btnData}/>
  )
}

export default Menu;