var Icon = require('../icon');
var element = require('magic-virtual-element');
var clone = require('../clone');

exports.render = function render(component) {
  var props = clone(component.props);
  delete props.children;
  return element(
    Icon,
    props,
    element('path', { 'fill-opacity': '.3', d: 'M2 22h20V2z' }),
    element('path', { d: 'M14 10L2 22h12z' })
  );
};