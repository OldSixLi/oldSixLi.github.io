/*
 * 全局方法注册,包括常用的提示、跳转、ajax请求等
 * @Author:马少博 (ma.shaobo@qq.com)
 * @Date: 2018年7月12日08:45:20
 * @Last Modified by: 马少博
 * @Last Modified time:date
 */

/* jshint esversion: 6 */
import Vue from 'vue';
//异步请求部分功能
import { post, get } from './ajax/ajax';
Vue.prototype.$post = post;
Vue.prototype.$get = get;

//NOTE 此处duration和type调换顺序,因为type的修改频率没有duration高;方便方法被调用
Vue.prototype.$tip = (strs, duration = 2000, type = "none") => {
  let str = strs.toString();
  wx.showToast({
    title: str,
    icon: type,
    duration: duration
  });
};

Vue.prototype.$tip_success = (str, duration = 2000) => {
  wx.showToast({
    title: str,
    icon: 'success',
    duration: 2000
  });
};

Vue.prototype.$alert = (title = "提示", strs, cb = function() {}) => {
  let str = strs.toString();
  wx.showModal({
    title: title,
    content: str,
    showCancel: false,
    success: function(res) {
      res.confirm && cb();
    }
  })
};

Vue.prototype.$confirm = (title = "提示", strs, successCb = function() {}, cancelCb = function() {}) => {
  let str = strs.toString();
  wx.showModal({
    title: title,
    content: str,
    showCancel: true,
    success: function(res) {
      res.confirm && successCb();
      !res.confirm && cancelCb();
    }
  });
}