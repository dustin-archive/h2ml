
# h2ml

> Create HTML strings from h()

Generate static HTML on the fly!
The output is minified so it's preferred over template strings or you can combine it with [`hyperx`](https://github.com/substack/hyperx) :wink:.

**If you need the output XSS secured you need to do it first.**

```js
h('div', [
  h('span', { class: 'title' }, 'Hello world'),
  h('p', `
    Autem placeat illo libero voluptatem dolorem.
    Ut ${h('b', 'consequatur neque harum')} sed molestias.
  `)
])
```

The whole tree concatenates on evaluation because the function outputs a string.

## Usage

### `h(name, data?, children?)`

An [`h2spec`](https://github.com/hyper2/h2spec) element.
Returns an HTML string.

```js
h('div', { class: 'foo' }, 'hello world')
// '<div class="foo">hello world</div>'

h('div', [
  h('span', 'foo'),
  h('span', 'bar')
])
// '<div><span>foo</span><span>bar</span></div>'
```
