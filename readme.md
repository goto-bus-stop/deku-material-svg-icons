# deku-material-svg-icons

Google's Material Design SVG icons as Deku components.

## Installation

```
npm install --save deku-material-svg-icons
```

## Usage

`require('deku-material-svg-icons/lib/{category}/{icon-name}')` returns a single
icon component. These `{icon-name}`s are "dasherised":
`hardware/keyboard-arrow-up`, not `hardware/keyboard_arrow_up`.

```js
/** @jsx element */
var deku = require('deku')
var element = require('virtual-element')
var WarningIcon = require('deku-material-svg-icons/lib/alert/warning')

var tree = deku.tree(
  <WarningIcon color="#f00" />
  // or without JSX:
  // element(WarningIcon, { color: '#f00' })
)

deku.render(tree, document.getElementById('#warning-icon'))
```

## Attributes

### size={number}

Set the icon size. Defaults to 24 pixels. This can be any value accepted by the
CSS `width` and `height` properties. If you pass a unitless value (`size={32}`),
pixels are assumed instead.

### color="color name, hex string, etc"

Set the icon color. Defaults to black (#000).

### style="prop: value; prop: value;"

Add additional CSS styles. If you're using `magic-virtual-element`, you can pass
an object, too.

### {...attributes}

All other attributes are passed through to the underlying SVG element verbatim.

## Building

Run `npm run build` to generates Deku components for all material design icons.
Generated components go in `lib/{category}/{icon-name}`.

## Licence

[MIT](./LICENSE)
