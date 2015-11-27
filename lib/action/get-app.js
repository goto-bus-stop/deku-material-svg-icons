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
    element('path', { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' })
  );
};