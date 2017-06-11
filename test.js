var test = require('tape')
var h = require('./')

test('creates html string', function (t) {
  t.plan(7)

  t.is(
    h('div', { class: 'foo', type: 'test' }, 'bar'),
    '<div class="foo" type="test">bar</div>',
    'single element'
  )

  t.is(
    h('div', { class: 'bar', type: 'test' }, [
      h('span', 'foo'),
      h('span', 'bar')
    ]),
    '<div class="bar" type="test"><span>foo</span><span>bar</span></div>',
    'basic nesting'
  )

  t.is(
    h('img', { src: 'dat://example.com' }),
    '<img src="dat://example.com">',
    'void element'
  )

  t.is(
    h('p', { test: 'foo "bar"' }, 'Hello world'),
    '<p test="foo \\"bar\\"">Hello world</p>',
    'escapes quotes'
  )

  t.is(
    h('canvas'),
    '<canvas></canvas>',
    'no body'
  )


  t.is(
    h('div', [
      h('span', { class: 'title' }, 'Hello world'),
      h('p', { class: 'body' },
        "Autem placeat illo libero voluptatem dolorem. " +
        "Ut " + h('b', 'consequatur neque harum') + " sed molestias."
      )
    ]),
  '<div><span class="title">Hello world</span><p class="body">Autem placeat illo libero voluptatem dolorem. Ut <b>consequatur neque harum</b> sed molestias.</p></div>',
    'complex example'
  )

  t.is(
    h('script', {async: true}, 'foo()'),
    '<script async="true">foo()</script>',
    'got non-string data'
  )
})
