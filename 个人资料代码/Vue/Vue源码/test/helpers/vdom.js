import VNode from 'core/vdom/vnode.js'

window.createTextVNode = function (text) {
  return new VNode(undefined, undefined, undefined, text)
}
