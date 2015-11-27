var Icon = require('../icon');
var element = require('magic-virtual-element');
var clone = require('../clone');

exports.render = function render(component) {
  var props = clone(component.props);
  delete props.children;
  return element(
    Icon,
    props,
    element('path', { d: 'M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z' })
  );
};