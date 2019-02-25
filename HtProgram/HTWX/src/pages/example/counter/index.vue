<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/example/index/main" class="counter" @click="toIndex">去往首页</a>
  </div>
</template>

<script>
  import store from './store'
  export default {
    computed: {
      count() {
        return store.state.count
      }
    },
    methods: {
      toIndex() {
        const url = '../index/main';
        wx.switchTab({
          url
        })
      },
      increment() {
        store.commit('increment')
      },
      decrement() {
        store.commit('decrement')
      }
    }
  }
</script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }
  
  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>