import Vue from 'vue';
//整体挂载点
import App from './App';
//全局组件在global中定义
// import './global/global.js';
//引入全局方法

import './global/methods'

//引入全局样式
import './global/main.css';


// NOTE:引入组件
import card from '@/components/card';
import htcourse from '@/components/htcourse';
// NOTE:注册全局组件
Vue.component('card', card);
Vue.component('ht-course', htcourse);

Vue.config.productionTip = true;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/example/index/main',
      'pages/example/show/main',
      'pages/example/info/main',
      'pages/index/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#6e6d6b",
      "selectedColor": "#e64340",
      "borderStyle": "white",
      "backgroundColor": "#fff",
      "box-shadow": "0 0 6px 0",
      "list": [{
          "pagePath": "pages/index/index/main",
          "iconPath": "static/images/ic_menu_choice_nor.png",
          "selectedIconPath": "static/images/ic_menu_choice_pressed.png",
          "text": "首页"
        }, {
          "pagePath": "pages/example/show/main",
          "iconPath": "static/images/ic_menu_topic_nor.png",
          "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
          "text": "积分商城"
        },
        {
          "pagePath": "pages/example/logs/main",
          "iconPath": "static/images/ic_menu_shoping_nor.png",
          "selectedIconPath": "static/images/ic_menu_shoping_pressed.png",
          "text": "浩天培训"
        },
        {
          "pagePath": "pages/example/counter/main",
          "iconPath": "static/images/ic_menu_me_nor.png",
          "selectedIconPath": "static/images/ic_menu_me_pressed.png",
          "text": "我的"
        }
      ]
    }
  }
}