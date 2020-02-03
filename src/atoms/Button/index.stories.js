import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import Button from '../Button'

const btnDefault = {
  value: 'Next',
  icon: 'Jedi'
}

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

storiesOf('Button', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
  <Button {...eventsFromObject} btnInfo={btnDefault}/>
));

