import React from './node_modules/react'
import styled from './node_modules/styled-components';

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