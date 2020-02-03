import React from './node_modules/react';

import LinkButton from '../../atoms/linkButton'


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