import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from '../../molecules/menu'

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