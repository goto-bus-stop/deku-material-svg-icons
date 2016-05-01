var Icon = require('../icon');
var element = require('magic-virtual-element');
var clone = require('../clone');

exports.render = function render(component) {
  var props = clone(component.props);
  delete props.children;
  return element(
    Icon,
    props,
    element('circle', { cx: '12', cy: '19', r: '2' }),
    element('path', { d: 'M10 3h4v12h-4z' })
  );
};