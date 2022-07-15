# solid-outside-click-handler

[![npm](https://img.shields.io/badge/npm-solid--outside--click--handler-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/solid-outside-click-handler)
[![npm version](https://img.shields.io/npm/v/solid-outside-click-handler.svg?style=flat-square)](https://www.npmjs.com/package/solid-outside-click-handler)
[![npm downloads](https://img.shields.io/npm/dm/solid-outside-click-handler.svg?style=flat-square)](https://www.npmjs.com/package/solid-outside-click-handler)
[![sponsors](https://img.shields.io/github/sponsors/diragb)](https://github.com/sponsors/diragb)

Detect and handle clicks outside a Solid component.

# Usage

## Installation

```bash
npm install solid-outside-click-handler --save
yarn add solid-outside-click-handler ## or in yarn
```

## Example

### Using the HOC
```tsx
import { Component } from 'solid-js'
import { OutsideClickHandler } from 'solid-outside-click-handler'


const Page: Component = () => (
  <OutsideClickHandler
    onOutsideClick={ () => console.log('Outside!') }
  >
    <div>Hello ✨</div>
  </OutsideClickHandler>
)
```

### Using the hook
```tsx
import { Component, onMount } from 'solid-js'
import { useOutsideClickHandler } from 'solid-outside-click-handler'


const Page: Component = () => {
  let ref

  onMount(() => {
    useOutsideClickHandler(ref, () => console.log('Outside!'))
  })

  return (
    <div ref={ ref }>Hello ✨</div>
  )
}
```

# License
MIT
