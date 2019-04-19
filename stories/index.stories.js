import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Text, View } from 'react-primitives'

// XXX TBD NOT WORKING in Storybook for some reason:
// import { Input } from '../index.js'

// TBD TEMPORARY WORKAROUND:
const Input = require('../TextInput.js')

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Input')} />);

storiesOf('Input', module)
  .add('with style & placeholder', () => (
    <Input
      type='text'
      style={{height: 48}}
      placeholder='Type some text here'
    />
  ))
  .add('with onChangeText handler', () => {
    const MyComponent = () => {
      const [length, setLength] = useState(0)
        return (
          <View>
            <Input
              type='text'
              style={{height: 48}}
              placeholder='Type some text here'
              onChangeText={(text) => { setLength(text.length) }}
            />
            <Text>{length} characters</Text>
          </View>
        )
    }
    return <MyComponent/>
  })
