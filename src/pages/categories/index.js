import React, { Component } from './node_modules/react'
import styled from './node_modules/styled-components';

import Menu from '../../Molecules/Menu'

const MenuDiv = styled.div`
  width: 100%;
`
export default class Categories extends Component{


  render(){
    return(
      <MenuDiv className='starwars__menu'>
        <Menu />
      </MenuDiv>
    )
  }
}