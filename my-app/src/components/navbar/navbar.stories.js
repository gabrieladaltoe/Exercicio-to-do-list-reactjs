import React from 'react';
import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react';
import Navbar from './index'

storiesOf('Components/Navbar', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
        <Navbar>Children here</Navbar>
  ))