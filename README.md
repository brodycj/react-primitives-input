# react-primitives-input

**LICENSE:** [MIT](./LICENSE)

`Input` component for [`react-primitives`](https://www.npmjs.com/package/react-primitives) to provide input types, starting with text input
for [`react-native`](https://www.npmjs.com/package/react-native) and [`react-native-web`](https://www.npmjs.com/package/react-native-web),
in a similar fashion to the [HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
(`Input` component for text would be similar to the [HTML text input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text).)

This component may support other input types such as button, checkbox, or even voice input someday in the future.

This component supports Android, iOS, and web for now, may support other platforms in case of sufficient interest
in the future.

## Usage

### Prerequisites

- [`react-native`](https://www.npmjs.com/package/react-native) present in case of a React Native app
- [`react-native-web`](https://www.npmjs.com/package/react-native-web) present in case of a [`react-native-web`](https://www.npmjs.com/package/react-native-web) app

**Recommended:**

- [`react-primitives`](https://www.npmjs.com/package/react-primitives) - a set of popular primitive components supported across
[`react-native-web`](https://www.npmjs.com/package/react-native-web) and [`react-native`](https://www.npmjs.com/package/react-native)

### Text input

```jsx
// ...

import Input from 'react-primitives-input'

  // ...
  // in render function:
  <View style={styles.container}>
    <Input
      type='text'
      style={{ height: 48 }}
      placeholder='Enter text here'
      onChangeText={(text) => this.setState({ textLength:text.length })}
    />
    <Text>First input length: { this.state.textLength }</Text>
  </View>
```

In this case, `Input` would be a `TextInput` component that uses all given properties except for `type`.

## Rationale

The idea is that it should be possible to have a single `Input` component that does not have to work the same
way on all types of platforms and devices. This would enable higher-level libraries such as
[Emotion js](https://github.com/emotion-js/emotion), [Styled Components](https://www.styled-components.com/),
[Styled System](https://github.com/styled-system/styled-system), etc. to support generic primitive `Input`
components that could be supported across a wide variety of platforms and devices.

## LICENSE

[MIT LICENSE](./LICENSE)
