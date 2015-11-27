/** @jsx element */
var Icon = require('../icon');
var element = require('virtual-element');
var clone = require('../clone');

exports.render = function render(component) {
  var props = clone(component.props);
  delete props.children;
  return element(
    Icon,
    props,
    element('path', { 'fill-opacity': '.3', d: 'M2 22h20V2z' }),
    element('path', { d: 'M17 7L2 22h15z' })
  );
};