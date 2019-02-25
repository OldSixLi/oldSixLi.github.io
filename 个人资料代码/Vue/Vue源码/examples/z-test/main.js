// import Vue from './../../dist/vue.js'

let App = Vue.component('ma', {
  template: '<div><h1>显示一些值{{mars}}</h1></div>',
  //对外获取的数据
  props: {},
  //组件内数据部分
  data: function () {
    return {
      mars: "火星撞地球"
    }
  },
  //组件生成时调用
  mounted: function () {}
});


// var name=new Vue({
//   el: "#vueBlock",
//   render(h){
// return h(App)
//   },
//   //数据部分 
//   data: {
//     name: "张三"
//   },
//   //方法
//   methods: {},
//   //过滤器
//   filters: {},
//   //实时计算
//   computed: {},
//   //加载后立即执行的方法(created 这个钩子在实例被创建之后被调用)
//   created: function () {}
// });



let childComp = {
  // template: '<div>{{msg}}</div>',

}

Vue.mixin({
  created() {
    console.log('parent created')
  }
})

let app = new Vue({
  el: '#vueBlock',
  created() {
    console.log('child created')
  },
  mounted() {
    console.log('child mounted')
  },
  data() {
    return {
      msg: 'Hello Vue',
      name: "张",
      lastName: "6666",
      num: 0
    }
  },
  computed: {
    uuname() {
      if (this.num > 0) {
        return this.name + this.lastName
      } else {
        return "不变啦啦啦"
      }
    }
  },
  methods: {
    change() {
      this.num++
    },
    changeNext() {
      this.lastName = "777777";
    }
  }
  // render: h => h(childComp)
})
