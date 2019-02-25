import {
  initMixin
} from './init'
import {
  stateMixin
} from './state'
import {
  renderMixin
} from './render'
import {
  eventsMixin
} from './events'
import {
  lifecycleMixin
} from './lifecycle'
import {
  warn
} from '../util/index'
/*Github:https://github.com/answershuto*/
/**
 * 必须通过实例化才能执行  实例化就声明init方法进行初始化进行一系列事情
 *
 * @param {*} options
 */
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  /*初始化*/
  this._init(options)
}
//此处定义原型方法 供实例调用
//NOTE 便于代码分隔与管理  ES5这种实现会比ES6方便很多
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue