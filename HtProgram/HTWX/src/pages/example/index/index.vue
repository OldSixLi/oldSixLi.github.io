<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar wobble" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>


    <a class="counter" @click="toCounter">去往Vuex示例页面</a>
    <a class="counter" @click="toMain">去往Shows示例页面</a>
    <a href="/pages/example/info/main" class="counter">个人信息</a>


    <form class="form-container">
      <!-- <input type="text" class="form-control" v-model="motto" placeholder="v-model" /> -->
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
      <a class="counter" @click="toSinger">歌手详情页面</a>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        motto: '6452',
        userInfo: {},
        userInfo: {}
      }
    },

    methods: {
      toSinger() {
        let url = "/pages/example/user/main?id=" + (this.motto || "");
        wx.navigateTo({
          url
        });
      },
      bindViewTap() {
        const url = '../logs/main'
        wx.switchTab({
          url
        })
      },
      toMain() {
        const url = '../show/main'
        wx.switchTab({
          url
        })
      },
      toCounter() {
        const url = '../counter/main'
        wx.switchTab({
          url
        })
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle(msg, ev) {
        // alert()
        // wx.showModal({
        //   title: '提示',
        //   content: (this.num++).toString(),
        //   success: function(res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //     } else if (res.cancel) {
        //       console.log('用户点击取消')
        //     }
        //   }
        // })

        console.log('clickHandle:', msg, ev)
      }
    },

    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>
  .userinfo-block {
    text-align: center;
    color: blueviolet;
  }
  
  .form-container {
    width: 50%;
  }
  
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px dotted #ddd; */
  }
  
  .userinfo-avatar {
    width: 328rpx;
    height: 328rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  
  .userinfo-nickname {
    color: #aaa;
  }
  
  .usermotto {
    margin-top: 10px;
  }
  
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    width: 100%;
    border: 1px solid #ccc;
  }
  
  @keyframes wobble {
    /* from {
      transform: none;
    } */
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    /* to {
      transform: none;
    } */
  }
  
  @keyframes circles {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  
  .wobble {
    animation-duration: 10s;
    animation-name: circles;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    box-shadow: 0 0 32px 3px rgba(38, 28, 28, 0.2);
    border-radius: 100%;
    border: 1px solid #ddd;
    /* padding: 2px; */
  }
</style>