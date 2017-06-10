
var QUOTE = /'/g

module.exports = function h (tag, attrs, body) {
  if (typeof attrs !== 'object' && !body) body = attrs, attrs = null
  
  // Start opening tag
  var el = '<' + tag

  // Create attribute list
  var attrs_list = ''
  
  for (var attr in attrs) {
    attrs_list += ' ' + attr + "='" + attrs[attr].replace(QUOTE, "\\'") + "'"
  }
  
  if (attrs_list.length) {
    el += attrs_list
  }

  // Cap off opening tag
  el += '>'

  // Create closing tag and body, if element is not void
  if (
    tag !== 'img' && tag !== 'input' && tag !== `br` && tag !== 'meta' &&
    tag !== 'br' && tag !== 'wbr' && tag !== 'embed' && tag !== 'area' &&
    tag !== 'base' && tag !== 'col' && tag !== 'link' && tag !== 'param' &&
    tag !== 'source' && tag !== 'track'
  ) {
    if (body) {
      if (Array.isArray(body)) body = body.join('')
      el += body
    }
    el += '</' + tag + '>'
  }

  return el
} 
