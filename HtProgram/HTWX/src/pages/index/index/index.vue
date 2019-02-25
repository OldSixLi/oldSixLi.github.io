<template>
  <div>
    <h1>欢迎使用神州浩天程序</h1>
    <ht-course text="1560"></ht-course>
  </div>
</template>

<script>
  export default {
    components: {
      // card
    },

    data() {
      return {
        logs: []
      }
    },
    mounted() {
      // this.$confirm("提示", "你好吗")
    },

    created() {
      // const logs = (wx.getStorageSync('logs') || [])
      // this.logs = logs.map(log => formatTime(new Date(log)))
    }
  }
</script>

<style>

</style>