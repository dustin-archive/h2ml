
var ALL_DOUBLE_QUOTES = /"/g

module.exports = function h (tag, attrs, body) {
  if (!body && typeof attrs !== 'object') {
    body = attrs
    attrs = null
  }

  // Start opening tag
  var el = '<' + tag

  // Create attribute list
  for (var attr in attrs) {
    el += ' ' + attr + '="' + attrs[attr].replace(ALL_DOUBLE_QUOTES, '\\"') + '"'
  }

  // Cap off opening tag
  el += '>'

  // Check if element has a body or is void (no body and no closer)
  if (body) {
    el += Array.isArray(body) ? body.join('') : body
  } else if (isVoid(tag)) {
    return el
  }

  // Return el with closer
  return el + '</' + tag + '>'
}

function isVoid (tag) {
  return tag === 'img' || tag === 'input' || tag === 'br' || tag === 'meta' ||
    tag === 'br' || tag === 'wbr' || tag === 'embed' || tag === 'area' ||
    tag === 'base' || tag === 'col' || tag === 'link' || tag === 'param' ||
    tag === 'source' || tag === 'track'
}
