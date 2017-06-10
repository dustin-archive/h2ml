
# h2ml

> Create HTML strings directly from h(...) calls

Good for generating static HTML on the fly (boilerplate, email templates, etc.)

```js
h('div', { class: 'foo' }, 'hello world')
// <div class='foo'>hello world</div>
```

Output is **not XSS secured** and minified as far as sanely possible

## Usage

### `h(tag, attributes?, body?)`
