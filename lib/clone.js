module.exports = function clone (obj) {
  var cl = {}
  Object.keys(obj).forEach(function (k) {
    cl[k] = obj[k]
  })
  return cl
}
