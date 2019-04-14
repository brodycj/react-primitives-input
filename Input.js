/* import TextInput from './imports' */
var TextInput = require('./TextInput')

/* import { createElement as h } from 'react' */
var h = require('react').createElement

var omit = require('object.omit');

var Input = (props) => {
  /* const { type, ...propsWithoutType } = props */
  var type = props.type
  var propsWithoutType = omit(props, 'type')

  /* return <TextInput {...propsWithoutType} /> */
  return h(TextInput, propsWithoutType)
}

/* export default Input */
module.exports = Input
