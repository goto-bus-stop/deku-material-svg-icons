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
    element('path', { d: 'M17.13 8.9l.59-1.3 1.3-.6-1.3-.59-.59-1.3-.59 1.3-1.31.59 1.31.6zm-4.74-2.37l-1.18 2.61-2.61 1.18 2.61 1.18 1.18 2.61 1.19-2.61 2.6-1.18-2.6-1.18zM19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2z' })
  );
};