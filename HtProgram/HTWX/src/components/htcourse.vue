<template>
  <div class="item">
    <!-- 你们好吗
    <br>
    {{text}} -->
    <!-- 图片展示区域 -->
    <div class="img-block">
<img src="http://om6fr85l4.bkt.clouddn.com/mieba.png" alt="">
    </div>
    <!-- 文字信息展示区域 -->
    <div class="text-block">
      <p class="course-title">这里是这里是课程名称这里是课程名称...</p>
      <div class="course-detail">
        <!-- <div></div>
        <div></div> -->
        <div class="left">
          <div class="price">¥&nbsp;450</div>
          <div class="num">32525人已兑换</div>
        </div>
        <div class="score">1563积分</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style>
  .item {
    display: flex;
    display: -webkit-flex;
    flex-wrap: nowrap;
    margin: 20rpx;
    padding: 20rpx 10rpx;
    border-bottom: 1rpx dashed #999;
  }
  
  .img-block {
    width: 240rpx;
    height: 176rpx;
    /* border-radius: 6px;
    border: 2rpx solid #999; */
    flex-grow: 0;
    flex-shrink: 0;
  }
  
  .img-block>img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }
  
  .text-block {
    flex-grow: 1;
    flex-shrink: 1;
    padding-left: 20rpx;
  }
  
  .course-title {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
    line-height: 38rpx;
  }
  
  .course-detail {
    margin-top: 20rpx;
    display: flex;
    display: -webkit-flex;
    flex-wrap: nowrap;
  }
  
  .course-detail .left {
    width: 50%;
    flex-grow: 1;
    flex-shrink: 1;
  }
  
  .course-detail .price {
    font-size: 26rpx;
    color: #666;
    line-height: 38rpx;
    height: 38rpx;
  }
  
  .course-detail .num {
    font-size: 22rpx;
    color: #999;
    line-height: 38rpx;
    vertical-align: bottom;
    height: 38rpx;
  }
  
  .course-detail .score {
    font-size: 38rpx;
    color: #ff7700;
    line-height: 76rpx;
    height: 76rpx;
    text-align: right;
  }
</style>