import Vue from './instance/index' //NOTE 1.在这定义了原型方法
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'

// NOTE 2.此处定义全局方法  
initGlobalAPI(Vue) //全局API  此处定义了VUE的全局方法

// NOTE 通过1和2   就可以定了Vue的方法和原型属性,当然其他部分还有原型方法的扩展

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Vue.version = '__VERSION__'

export default Vue