import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import CardTitle from '../cardTitle';

const data = {
  name: 'São gonçalo',
}

storiesOf('CardTitle', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
  <CardTitle infos={data}/>
));