import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '.'

storiesOf('Components/Form/Label', module)
  .add('default', () => (
    <Label>children Here</Label>
  ))