/*
 * promise方式进行异步请求
 * @Author:马少博 (ma.shaobo@qq.com)
 * @Date: 2018年7月12日08:51:10
 * @Last Modified by: 马少博
 * @Last Modified time:date
 */
/* jshint esversion: 6 */

//配置基础地址
let baseUrl = "http://192.168.106.60:9999/";

/**
 * post 方法
 *
 * @param {*} url 请求地址
 * @param {*} body 请求数据
 * @returns
 */
function post(url, body, complete_cb) {
  if (url.indexOf('http') == -1) {
    url = baseUrl + url;
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url, // 拼接完整的 url
      data: body,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res.data) // 把返回的数据传出去
      },
      fail(ret) {
        reject(ret.errMsg) // 把错误信息传出去
      },
      complete() {
        //结束后处理
        if (complete_cb) {
          complete_cb();
          console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
          console.log("请求完成");
          console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
        }
      }
    });
  });
}

function get(url, body, complete_cb) {
  if (url.indexOf('http') == -1) {
    url = baseUrl + url;
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url, // 拼接完整的 url
      data: body,
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res.data) // 把返回的数据传出去
      },
      fail(ret) {
        reject(ret.errMsg) // 把错误信息传出去
      },
      complete() {
        //结束后处理
        if (complete_cb) {
          complete_cb();
        }
      }
    });
  });
}

export { post, get }