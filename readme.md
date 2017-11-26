
# h2ml

> h() that returns an HTML string.

```js
import h from 'h2ml'

h('div', null, [
  h('span', { class: 'title' }, 'Hello world'),
  h('p', { class: 'body' },
    'Autem placeat illo libero voluptatem dolorem. ' +
    'Ut ' + h('b', null, 'consequatur neque harum') + ' sed molestias.'
  )
])
```

**Embeds are not XSS secured**.  Combine it with a library like [`xss`](https://npmjs.com/xss):

```js
import h from 'h2ml'
import secure from 'xss'

var req = h('script', null, 'alert("hacked")')

h('span', null, secure(req))
// => '<span>&lt;script&gt;alert("hacked")&lt;/script&gt;</span>'
```

## Usage

### `h(tag)`
### `h(tag, data)`
### `h(tag, data, children)`

- `tag` specifies the type of element.
- `data` is the attributes.
- `children` is an optional string or array of strings.

```js
h('div', { class: 'foo' }, 'hello world')
// '<div class="foo">hello world</div>'

h('div', null, [
  h('span', 'foo'),
  h('span', 'bar')
])
// '<div><span>foo</span><span>bar</span></div>'
```
