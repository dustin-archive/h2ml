const test = require('tape')
const h = require('./')
const secure = require('xss-filters')

test('html strings', t => {
  t.plan(8)

  t.is(
    h('div', { class: 'foo', type: 'test' }, 'bar'),
    '<div class="foo" type="test">bar</div>',
    'single element'
  )

  t.is(
    h('div', { class: 'bar', type: 'test' }, [
      h('span', null, 'foo'),
      h('span', null, 'bar')
    ]),
    '<div class="bar" type="test"><span>foo</span><span>bar</span></div>',
    'basic nesting'
  )

  t.is(
    h('img', { src: 'dat://example.com' }),
    '<img src="dat://example.com"/>',
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
    h('div', null, [
      h('span', { class: 'title' }, 'Hello world'),
      h('p', { class: 'body' },
        'Autem placeat illo libero voluptatem dolorem. ' +
        'Ut ' + h('b', null, 'consequatur neque harum') + ' sed molestias.'
      )
    ]),
  '<div><span class="title">Hello world</span><p class="body">Autem placeat illo libero voluptatem dolorem. Ut <b>consequatur neque harum</b> sed molestias.</p></div>',
    'complex example'
  )

  t.is(
    h('script', { async: true }, 'foo()'),
    '<script async="true">foo()</script>',
    'got non-string data'
  )

  t.is(
    h('path', { d: 'M0,100' }, [ h('boo') ]),
    '<path d="M0,100"><boo></boo></path>',
    'allow overriding void elements'
  )
})

test('xss example', t => {
  t.plan(1)

  var data = '<script>alert("hacked nerd")</script>'

  t.is(
    h('span', null, secure.inHTMLData(data)),
    '<span>&lt;script>alert("hacked nerd")&lt;/script></span>'
  )
})
