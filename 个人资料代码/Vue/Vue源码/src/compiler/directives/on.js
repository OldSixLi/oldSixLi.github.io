/* @flow */

import { warn } from 'core/util/index.js'

export default function on (el: ASTElement, dir: ASTDirective) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn(`v-on without argument does not support modifiers.`)
  }
  el.wrapListeners = (code: string) => `_g(${code},${dir.value})`
}
