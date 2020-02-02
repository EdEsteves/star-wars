import React from 'react'
import { action } from '@storybook/addon-actions'

import Logo from './index'

export default {
  component: Logo,
  title: 'Logo',
  excludeStories: /.*Data$/
}

export const Default = () => {
  return <Logo />
}