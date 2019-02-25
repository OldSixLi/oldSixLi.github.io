<template>
  <div>
    <div class="flex">
      <div class="child-flex" :class="{active:currentPanel=='1'}" @click="changePanel"><b>课程兑换</b></div>
      <div class="child-flex" :class="{active:currentPanel=='2'}" @click="changePanel"><b>蛋糕兑换</b></div>
    </div>
    <div v-show="currentPanel=='1'">
      当前显示的内容由正常显示
    </div>
    <div v-show="currentPanel=='2'">
      <ul @click="direct" class="order-list">
        <li>12233</li>
        <li>12233</li>
        <li>12233</li>
        <li>12233</li>
        <li>12233</li>
        <li v-for="(x,key) in 3">
          <card :text="x" :key="x"></card>
        </li>
        <p>当前全局函数:{{count}}</p>
      </ul>
    </div>
  </div>
</template>
<script>
  // 与counter 文件中的store共用一个
  import store from './../counter/store';
  export default {
    computed: {
      count() {
        return store.state.count
      }
    },
    props: {},
    data: function() {
      //组件内数据部分
      return {
        currentPanel: "1"
      }
    },
    mounted: function() {
      //组件生成时调用
    },
    methods: {
      changePanel() {
        this.currentPanel = this.currentPanel == "1" ? "2" : "1";
      },
      direct() {
        const url = '../index/main'
        wx.switchTab({
          url
        })
      }
    }
  }
</script>
<style>
  *,
  body,
  html {
    color: #000;
  }
  
  .order-list,
  .order-list>view {
    font-size: 40rpx;
    text-align: center;
  }
  
  view {
    color: #000;
    text-align: center;
  }
  
  .flex {
    font-size: 30rpx;
    display: -webkit-flex;
    display: flex;
    height: 80rpx;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-top;
  }
  
  .flex>.child-flex {
    box-sizing: border-box;
    flex: 1 1 50%;
    line-height: 80rpx;
    /* height: 60rpx; */
    border: 1px solid #ddd;
    flex-grow: 1;
    flex-shrink: 1;
    background-color: rgb(241, 240, 240);
  }
  
  .child-flex:first-child {
    border-right: none;
    border-left: none;
  }
  
  .child-flex:last-child {
    border-right: none;
  }
  
  .child-flex.active {
    border-bottom: none;
    background-color: #fff;
  }
</style>