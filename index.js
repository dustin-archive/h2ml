
var DOUBLE_QUOTES = /"/g
var VOID = ['img', 'input', 'meta', 'br', 'wbr', 'embed', 'area', 'base', 'col',
  'link', 'param', 'source', 'track', 'circle', 'ellipse', 'line', 'mesh',
  'path', 'polygon', 'polyline', 'rect']

module.exports = function h (tag, data, children) {
  var attrs = ''
  for (var attr in data) {
    var value = data[attr]
    if (typeof value !== 'string') value = value.toString()
    attrs += ' ' + attr + '="' + value.replace(DOUBLE_QUOTES, '\\"') + '"'
  }

  var el = '<' + tag + attrs

  if (VOID.indexOf(tag) !== -1 && !children) {
    return el + '/>'
  } else {
    var inner = Array.isArray(children) ? children.join('') : children || ''
    return el + '>' + inner + '</' + tag + '>'
  }
}
