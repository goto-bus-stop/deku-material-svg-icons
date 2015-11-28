var element = require('magic-virtual-element')
var toStyleString = require('to-style').string

exports.render = function render (component) {
  var props = component.props
  var size = 'size' in props ? props.size : 24

  var style = {
    width: size,
    height: size
  }
  if (props.color) {
    style.fill = props.color
  }

  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    style: toStyleString(style)
  }
  Object.keys(props).forEach(function (key) {
    if (key === 'style') {
      attrs.style += '; ' + props.style
    } else if (key !== 'children') {
      attrs[key] = props[key]
    }
  })
  return element('svg', attrs, props.children)
}
