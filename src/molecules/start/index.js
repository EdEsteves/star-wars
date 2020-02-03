import React from 'react'
import styled from 'styled-components';

import Logo from '../../Atoms/Logo'
import LinkButton from '../../Atoms/LinkButton'

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