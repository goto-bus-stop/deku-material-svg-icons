var babel = require('babel-core')
var fs = require('fs')
var glob = require('glob')
var mkdirp = require('mkdirp')
var path = require('path')

var tpl = fs.readFileSync('./src/template.js', 'utf8')

glob('node_modules/material-design-icons/*/svg/production/*_24px.svg', function (e, files) {
  if (e) throw e
  files.forEach(function (file) {
    var outName = getComponentName(file)
    var svg = fs.readFileSync(file, 'utf8')
    var elements = getSvgPaths(svg)
    var source = tpl.replace('PATHS', elements)
    mkdirp.sync('./lib/' + path.dirname(outName))
    fs.writeFileSync('./lib/' + outName, transform(source))
  })

  fs.writeFileSync('./lib/icon.js', fs.readFileSync('./src/icon.js', 'utf8'))
  fs.writeFileSync('./lib/clone.js', fs.readFileSync('./src/clone.js', 'utf8'))
})

function getSvgPaths (svg) {
  // hacky, but seems to sort of work :)
  return svg.slice(svg.indexOf('>') + 1, svg.lastIndexOf('<'))
}

function getComponentName (file) {
  var re = /^.*?material-design-icons\/(.*?)\/svg\/production\/(.*?)_24px.svg$/
  return file.replace(re, function (_, category, name) {
    return category + '/' + name.replace(/^ic_/, '').replace(/_/g, '-') + '.js'
  })
}

function transform (src) {
  return babel.transform(src, {
    plugins: [
      [ 'transform-react-jsx', { pragma: 'element' } ]
    ]
  }).code
}
