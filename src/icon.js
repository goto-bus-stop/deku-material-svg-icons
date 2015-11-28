var element = require('magic-virtual-element')

exports.render = function render (component) {
  var props = component.props
  var size = 'size' in props ? props.size : 24
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    style: 'width: ' + size + 'px; height: ' + size + 'px;'
  }
  if (props.color) {
    attrs.style += ' fill: ' + props.color + ';'
  }
  Object.keys(props).forEach(function (key) {
    if (key === 'style') {
      attrs.style += ' ' + props.style
    } else if (key !== 'children') {
      attrs[key] = props[key]
    }
  })
  return element('svg', attrs, props.children)
}
