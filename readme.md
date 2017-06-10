
# h2ml

> Create HTML strings directly from h(...) calls

For generating static HTML on the fly.  The output is **not XSS secured**, and minified as far as sanely possible

```js
h('div', [
  h('span', { class: 'title' }, 'Hello world'),
  h('p', `
    Autem placeat illo libero voluptatem dolorem.
    Ut ${h('b', 'consequatur neque harum')} sed molestias.
  `)
])
```

## Usage

### `h(name, data?, children?)`

Symbolizes an element, and returns the HTML string of it.  It is similair to other `h` functions (like [`hyperapp`](https://npmjs.com/hyperapp) or [`hyperscript`](https://npmjs.com/hyperscript)), except it concats strings all the way down the tree instead of creating nested objects

```js
h('div', { class: 'foo' }, 'hello world')
// '<div class="foo">hello world</div>'

h('div', [
  h('span', 'foo'),
  h('span', 'bar')
])
// '<div><span>foo</span><span>bar</span></div>'
```

