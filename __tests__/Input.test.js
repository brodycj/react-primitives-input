import React from 'react'

// XXX TBD XXX:
import Input from '../TextInput.js'

import renderer from 'react-test-renderer'

test('xxx', () => {
  // --
  const i1 = renderer.create(<Input/>)

  expect(i1.toJSON()).toMatchSnapshot()

})
