
var DOUBLE_QUOTES = /"/g

module.exports = function h (tag, data, children) {
  var el = '<' + tag

  // Add attributes to element
  for (var attr in data) {
    var value = data[attr]
    if (typeof value !== 'string') value = value.toString()
    el += ' ' + attr + '="' + value.replace(DOUBLE_QUOTES, '\\"') + '"'
  }

  el += '>'

  // If its a void tag, return now
  switch (tag) {
    case 'img':
    case 'input':
    case 'meta':
    case 'br':
    case 'wbr':
    case 'embed':
    case 'area':
    case 'base':
    case 'col':
    case 'link':
    case 'param':
    case 'source':
    case 'track':
      return el
  }

  // Add children and closing tag to element
  if (children) el += Array.isArray(children) ? children.join('') : children
  return el + '</' + tag + '>'
}
