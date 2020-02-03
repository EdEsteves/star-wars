import React from 'react'
import styled from 'styled-components';

import Logo from '../../atoms/Logo'
import LinkButton from '../../atoms/LinkButton'

const StartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Start = () => {
  const btnData = {
    value: 'Start',
    url: '/categories',
    icon: ''
  }
  return(
    <StartDiv className='starwars__start'>
      <Logo />
      <LinkButton btnInfo={btnData} />
    </StartDiv>
  )
}

export default Start