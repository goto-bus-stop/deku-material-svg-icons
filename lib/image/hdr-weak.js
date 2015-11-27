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
    element('path', { d: 'M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z' })
  );
};