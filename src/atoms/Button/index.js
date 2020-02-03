import React, { Component } from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons';

// import './styles.scss'

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  color: #fff;
  border: 2px solid #BC1E22;
  width: 100%;
  padding: 15px;
  text-transform: uppercase;
  font-family: 'Press Start 2P', cursive;
  transition: all .7s ease;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px){
    font-size: 14px;
  }
  &:hover{
    background: #BC1E22 !important;
  }
  svg{
    width: 22px !important;
    height: 22px !important;
    margin-right: 10px;
  } 
`;

export default class Button extends Component{
  constructor(props){
    super(props)

    this.state = {
      loading: false
    }
  }

  randomizer = (count, action) => {
    const fromComp = true;
    action(count, fromComp)
    // this.getCategorieRandomInfo(count)
  }

  render({ btnInfo, count, action } = this.props ){
    return <Btn onClick={() => this.randomizer(count, action)}><FontAwesomeIcon icon={faJedi}></FontAwesomeIcon>{btnInfo.value}</Btn>
  }
}
