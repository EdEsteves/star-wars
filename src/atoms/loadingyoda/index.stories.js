import React from 'react';
import { action } from '@storybook/addon-actions'

import LoadingYoda from './index'

export default {
  component: LoadingYoda,
  title: 'Loading-yoda',
  excludeStories: /.*Data$/
}

const animationStyle = {
  name: 'spin',
  duration: '1s',
  timing: 'linear',
  count: 'infinite'
}

export const Default = () => {
  return <LoadingYoda animation={{...animationStyle}} />
}