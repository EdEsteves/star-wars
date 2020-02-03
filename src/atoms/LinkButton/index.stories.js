import React, { Component } from 'react'
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
 
import LinkButton from '../LinkButton';
// import { action } from '@storybook/addon-actions'

// import LinkButton from './index'

// export default {
//   component: LinkButton,
//   title: 'Categories-button',
//   excludeStories: /.*Data$/
// }

const btnDefault = {
  value: 'Planets',
  url: '/categories',
  icon: 'faPlanetEurope',
  class: 'storybook'
}


// export const Default = () => {
//   return (
//     <LinkButton btnInfo={btnDefault}/>
//   )
// }
 
storiesOf('LinkButton', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <LinkButton btnInfo={btnDefault}/>
  ));