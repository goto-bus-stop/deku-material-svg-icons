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
    element('path', { 'fill-opacity': '.3', d: 'M22 8V2L2 22h16V8z' }),
    element('path', { d: 'M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z' })
  );
};