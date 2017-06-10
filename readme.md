
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

Symbolizes an element, and returns the HTML string of it.  It is similair to other `h` functions (like [`hyperapp`](https://npmjs.com/hyperapp) or [`hyperscript`](https://npmjs.com/hyperscript)), except it concats strings all the way down the tree, instead of creating nested objects

```js
h('div', { class: 'foo' }, 'hello world')
// '<div class="foo">hello world</div>'

h('div', [
  h('span', 'foo'),
  h('span', 'bar')
])
// '<div><span>foo</span><span>bar</span></div>'
```

I know that the variations in `h(...)` can be annoying, so here is a short spec of the behavarior here:

- `h(name, data, children)`
  - Where `name`: is a string with nothing else attached (no classes/ids and no other selectors)
  - Where `data` is nil or object with properity being an HTML attribute of the element
  - Where `children` is nil or a string (or array of strings) of the body (i.e. subsequent `h(...)` calls)
  - Returns an HTML string 
- `h(name, children)`
  - With `data` defaulting to nil
  - Where `children` is only a string or array
- `h(name, data)`
  - With `children` defaulting to nil
  - Where `data` is only an object
- `h(name)`

With "nil" being defined as `null`, `undefined`, or _empty_ depending on the context (an empty node, empty string, empty array, and so on)
