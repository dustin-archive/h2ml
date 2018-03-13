
# h2ml

> An h function that returns any XML dialect as a string.

## Example

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

_**NOTICE** Embeds are not XSS secured. Combine it with a library like [xss](https://npmjs.com/xss)_

```js
import h from 'h2ml'
import secure from 'xss'

const req = h('script', null, 'alert("hacked")')

h('span', null, secure(req))
// => '<span>&lt;script&gt;alert("hacked")&lt;/script&gt;</span>'
```

## Usage

[This function follows the h2spec guidelines.](https://github.com/hyper2/h2spec)

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
