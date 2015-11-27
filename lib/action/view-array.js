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
    element('path', { d: 'M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z' })
  );
};