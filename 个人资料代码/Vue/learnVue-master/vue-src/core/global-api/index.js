/* @flow */

import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import {set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants' //这个地方是components,directive,filter方法的注册
import builtInComponents from '../components/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

export function initGlobalAPI(Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  Object.defineProperty(Vue, 'config', configDef)
    // 在global下注册了Vue的全局方法

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  //定义全局方法
  Vue.util = {
      // 这个方法不推荐使用 因为不稳定  
      warn,
      extend,
      mergeOptions,
      defineReactive
    }
    //定义全局方法
  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick //定义nextTick

  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  /*_base被用来标识基本构造函数（也就是Vue），以便在多场景下添加组件扩展*/
  Vue.options._base = Vue;
  //定义组件的方式
  extend(Vue.options.components, builtInComponents);
  //定义全局方法
  initUse(Vue) // Vue.use() 方法
  initMixin(Vue) //定义全局mixin方法
  initExtend(Vue)
  initAssetRegisters(Vue)
}