/* @flow */

import { warn } from 'core/util/debug.js'
import { handleError } from 'core/util/error.js'
import { RECYCLE_LIST_MARKER } from 'weex/util/index.js'
import { createComponentInstanceForVnode } from 'core/vdom/create-component.js'
import { resolveVirtualComponent } from './virtual-component'

export function isRecyclableComponent (vnode: VNodeWithData): boolean {
  return vnode.data.attrs
    ? (RECYCLE_LIST_MARKER in vnode.data.attrs)
    : false
}

export function renderRecyclableComponentTemplate (vnode: MountedComponentVNode): VNode {
  // $flow-disable-line
  delete vnode.data.attrs[RECYCLE_LIST_MARKER]
  resolveVirtualComponent(vnode)
  const vm = createComponentInstanceForVnode(vnode)
  const render = (vm.$options: any)['@render']
  if (render) {
    try {
      return render.call(vm)
    } catch (err) {
      handleError(err, vm, `@render`)
    }
  } else {
    warn(
      `@render function not defined on component used in <recycle-list>. ` +
      `Make sure to declare \`recyclable="true"\` on the component's template.`,
      vm
    )
  }
}
