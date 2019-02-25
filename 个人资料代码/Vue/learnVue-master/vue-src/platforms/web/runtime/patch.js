/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules); //组合weex平台相关的modules
// 柯粒化
//node-operations  node-modules 都是真实dom的相关方法和属性
export const patch: Function = createPatchFunction({ nodeOps, modules });