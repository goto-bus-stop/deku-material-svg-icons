# deku-material-svg-icons

Google's Material Design SVG icons as Deku components.

## Installation

```
npm install --save deku-material-svg-icons
```

## Usage

```js
var deku = require('deku')
var element = require('virtual-element')
var WarningIcon = require('deku-material-svg-icons/lib/alert/warning')

var tree = deku.tree(
  element(WarningIcon, { style: { fill: '#f00' } })
  // or with JSX:
  // <WarningIcon style={{ fill: '#f00' }} />
)

deku.render(tree, document.getElementById('#warning-icon'))
```

## Building

Run `npm run build` to generates Deku components for all material design icons.
Generated components go in `lib/{category}/{icon-name}`.

## Licence

[MIT](./LICENSE)
