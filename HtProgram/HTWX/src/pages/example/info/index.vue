<template>
  <div>
    <p>马少博</p>
    <p>21岁</p>
    <view class="order-total">
      <view class="l">实付：￥{{actualPrice}}</view>
      <view class="r" @tap="submitOrder">去付款</view>
  </view>
  </div>
</template>

<script>
  import {
    formatTime
  } from '@/utils/index'
  // import card from '@/components/card'

  export default {
    components: {
      // card
    },
    submitOrder() {
      const url = '../index/main'
      wx.switchTab({
        url
      })
    },
    data() {
      return {
        logs: [],
        actualPrice: 15666
      }
    },
    methods: {
      submitOrder() {
        const url = '../index/main'
        wx.switchTab({
          url
        })
      }
    },
    created() {
      const logs = (wx.getStorageSync('logs') || [])
      this.logs = logs.map(log => formatTime(new Date(log)))
    }
  }
</script>

<style>
  .log-list {
    display: flex;
    flex-direction: column;
    padding: 40rpx;
  }
  
  .log-item {
    margin: 10rpx;
  }
  /* 底部toolBar */
  
  .order-total {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100rpx;
    width: 100%;
    display: flex;
  }
  
  .order-total .l {
    flex: 1;
    height: 100rpx;
    line-height: 100rpx;
    color: #b4282d;
    background: #fff;
    font-size: 33rpx;
    padding-left: 31.25rpx;
    border-top: 1rpx solid rgba(0, 0, 0, 0.2);
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.2);
  }
  
  .order-total .r {
    width: 233rpx;
    height: 100rpx;
    background: #b4282d;
    border: 1px solid #b4282d;
    line-height: 100rpx;
    text-align: center;
    color: #fff;
    font-size: 30rpx;
  }
</style>