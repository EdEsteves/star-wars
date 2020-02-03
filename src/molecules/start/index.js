import React from './node_modules/react'
import styled from './node_modules/styled-components';

import Logo from '../../atoms/logo'
import LinkButton from '../../atoms/linkButton'

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