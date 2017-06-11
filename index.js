
var DOUBLE_QUOTES = /"/g

module.exports = function h (tag, data, children) {
  if (!children && (typeof data !== 'object' || Array.isArray(data))) {
    children = data
    data = null
  }

  // Start opening tag
  var el = '<' + tag

  // Create attribute list
  for (var attr in data) {
    var value = data[attr]
    if (typeof value !== 'string') value = value.toString()
    el += ' ' + attr + '="' + value.replace(DOUBLE_QUOTES, '\\"') + '"'
  }

  // Cap off opening tag
  el += '>'

  // Check if element has a body or is void (no body and no closer)
  if (children) {
    el += Array.isArray(children) ? children.join('') : children
  } else if (isVoid(tag)) {
    return el
  }

  // Return el with closer
  return el + '</' + tag + '>'
}

function isVoid (tag) {
  return tag === 'img' || tag === 'input' || tag === 'meta' ||
    tag === 'br' || tag === 'wbr' || tag === 'embed' || tag === 'area' ||
    tag === 'base' || tag === 'col' || tag === 'link' || tag === 'param' ||
    tag === 'source' || tag === 'track'
}
