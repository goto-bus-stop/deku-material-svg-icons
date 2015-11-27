/** @jsx element */
var element = require('magic-virtual-element')

exports.render = function render (component) {
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    style: {
      width: 24,
      height: 24
    }
  }
  Object.keys(component.props).forEach(function (key) {
    if (key === 'style') {
      assign(attrs.style, component.props.style)
    } else if (key !== 'children') {
      attrs[key] = component.props[key]
    }
  })
  return element('svg', attrs, component.props.children)
}
