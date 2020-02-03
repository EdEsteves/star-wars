import React from 'react'

import Logo from './index'

export default {
  component: Logo,
  title: 'Logo',
  excludeStories: /.*Data$/
}

export const Default = () => {
  return <Logo />
}