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
    element('path', { d: 'M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z' })
  );
};