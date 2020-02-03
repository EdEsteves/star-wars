import React from './node_modules/react'
import { Link } from './node_modules/react-router-dom';
import styled from './node_modules/styled-components';

import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { faGlobeEurope } from './node_modules/@fortawesome/free-solid-svg-icons';

// import './styles.scss'

const LinkBtn = styled.div`
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    color: #fff;
    border: 2px solid #BC1E22;
    padding: 15px;
    text-transform: uppercase;
    font-family: 'Press Start 2P', cursive;
    transition: all .7s ease;
    text-decoration: none;
    @media screen and (min-width: 1024px){
      font-size: 14px;
    }
    &:hover{
      background: #BC1E22 !important;
    }
    svg{
      width: 30px !important;
      height: 30px !important;
      margin-right: 10px;
    } 
  }  
`;

const LinkButton = ({ btnInfo } = this.props) => {
  return <LinkBtn className={btnInfo.class} ><Link to={btnInfo.url} >{btnInfo.icon ? <FontAwesomeIcon icon={faGlobeEurope} /> : ''}{btnInfo.value}</Link></LinkBtn>
}

export default LinkButton;