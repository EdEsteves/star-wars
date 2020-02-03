import React from 'react'
import styled from 'styled-components';

const LogoStarWars = styled.img`
  width: 300px;
  height: auto;
  max-width: 100%;
  margin-bottom: 50px;
`


const Logo = () => (
  <LogoStarWars src='star-wars-logo.png'></LogoStarWars>
)

export default Logo;