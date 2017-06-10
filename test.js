var test = require('tape')
var h = require('./')

test('creates html string', function (t) {
  t.plan(5)

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
})
