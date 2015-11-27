/** @jsx element */
var Icon = require('../icon')
var element = require('virtual-element')
var clone = require('../clone')

exports.render = function render (component) {
  var props = clone(component.props)
  delete props.children
  return (
    <Icon {...props}>
      PATHS
    </Icon>
  )
}
