import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import CardInfos from '../cardInfos';

const data = {
  population: 30000,
  climate: 'Quente bagarai',
  terrain: 'Torto',
  films: {length: 7},
}

storiesOf('CardInfos', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
  <CardInfos infos={data}/>
));