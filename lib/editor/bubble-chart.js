var Icon = require('../icon');
var element = require('magic-virtual-element');
var clone = require('../clone');

exports.render = function render(component) {
  var props = clone(component.props);
  delete props.children;
  return element(
    Icon,
    props,
    element('circle', { cx: '7.2', cy: '14.4', r: '3.2' }),
    element('circle', { cx: '14.8', cy: '18', r: '2' }),
    element('circle', { cx: '15.2', cy: '8.8', r: '4.8' })
  );
};