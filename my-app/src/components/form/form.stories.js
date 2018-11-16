import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Form from './index'
import Button from './button'
import Input from './input'
import Label from './label'
import Link from './link'

storiesOf('Components/Form', module)
    .addDecorator(StoryRouter())
    .add('default', () => (
    <Form>
        <Label>children Here</Label>
        <Input type='text' required placeholder='Digite aqui' />
        <Button>Children Here</Button>
        <Link href='/'>Link Here</Link>
    </Form>
    ))
