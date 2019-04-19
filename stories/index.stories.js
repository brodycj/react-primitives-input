import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

// XXX TBD NOT WORKING in Storybook for some reason:
// import { Input } from '../index.js'

// TBD TEMPORARY WORKAROUND:
const Input = require('../TextInput.js')

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Input')} />);

/* ** TBD GONE:
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
// */

storiesOf('Input', module)
  .add('with style & placeholder', () => (
    <Input
      type='text'
      style={{height: 48}}
      placeholder='Type some text here'
    />
  ))
