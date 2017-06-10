
var QUOTE = /'/g

module.exports = function h (tag, attrs, body) {
  if (typeof attrs !== 'object' && !body) body = attrs, attrs = null
  
  // Start opening tag
  var el = '<' + tag

  // Create attribute list
  for (var attr in attrs) {
    el += ' ' + attr + "='" + attrs[attr].replace(QUOTE, "\\'") + "'"
  }

  // Cap off opening tag
  el += '>'

  // Create body and closer (if is not a void)
  if (
    tag !== 'img' && tag !== 'input' && tag !== 'br' && tag !== 'meta' &&
    tag !== 'br' && tag !== 'wbr' && tag !== 'embed' && tag !== 'area' &&
    tag !== 'base' && tag !== 'col' && tag !== 'link' && tag !== 'param' &&
    tag !== 'source' && tag !== 'track'
  ) {
    if (body) el += Array.isArray(body) ? body.join('') : body
    el += '</' + tag + '>'
  }

  return el
} 
