
# h2ml

> An h function that returns HTML (or XML) strings.

```js
const h = require('h2ml')

h('div', null, [
  h('span', { class: 'title' }, 'Hello world'),
  h('p', { class: 'body' },
    'Autem placeat illo libero voluptatem dolorem. ' +
    'Ut ' + h('b', null, 'consequatur neque harum') + ' sed molestias.'
  )
])
```

Injected content *is not* XSS secured and should be combined with a library like [`xss-filters`](https://npmjs.com/xss-filters)

```js
const h = require('h2ml')
const secure = require('xss-filters')

// Example if a user sent a script tag
const data = '<script>alert("hacked nerd")</script>'

h('span', null, secure.inHTMLData(data))
// => '<span>&lt;script>alert("hacked nerd")&lt;/script></span>'
```

## Usage

This package follows the [h2spec guidelines](https://github.com/hyper2/h2spec).

### `h(tag, data?, children?)`

- `tag`: The element name.
- `data` (optional): An object containing the attributes to set on the element.
- `children` (optional): A string or array of strings.

```js
h('div', { class: 'foo' }, 'hello world')
// '<div class="foo">hello world</div>'

h('div', null, [
  h('span', 'foo'),
  h('span', 'bar')
])
// '<div><span>foo</span><span>bar</span></div>'
```
