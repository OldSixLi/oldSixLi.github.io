<template>
  <div>
   <p>名称:{{userInfo.name}}</p>
   <p>头像:
     <img :src="userInfo.img1v1Url" alt="" class="imgs">
   </p>
   <p v-for="(x,index) in hotSongs" class="song-title">
    <span :key="x.id">{{index+1}}-{{x.name}}</span> 
   </p> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {},
        hotSongs: [],
        currentPage: 0,
        totalPage: 6
      }
    },

    methods: {
      getDetail(id) {
        let _self = this;
        this.$get('http://192.168.106.60:9999/artists', {
          id: id
        }).then(da => {
            console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
            console.log(da);
            console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
            if (da.code == 404 || da.code == 400) {
              this.$tip('未查找到此歌手');
              setTimeout(() => {
                wx.navigateBack()
              }, 1000);
            } else {
              this.userInfo = (da && da.artist) || {};
            }
          },
          err => {
            this.$tip('请求出现错误');
            setTimeout(() => {
              wx.navigateBack(-2)
            }, 1000);
          });
      },
      showAlert() {
        this.$tip("哎呦,到底咯");
      },
      getUserSong() {
        let searchData = {
          keywords: "张惠妹",
          limt: 30,
          offset: this.currentPage
        }
        this.$get(`http://192.168.106.60:9999/search`, searchData).
        then(da => {
          this.hotSongs = this.hotSongs.concat(da.result.songs);
          this.currentPage++;
        }, err => console.log(err));
      }
    },

    // 上拉加载，拉到底部触发
    onReachBottom() {
      if (this.currentPage <= this.totalPage) {
        this.getUserSong();
      } else {
        this.$tip('没有更多数据')
      }
    },

    mounted() {
      // this.$alert(
      //   '你好',
      //   '测试封装组件功能',
      //   () => this.$tip('点击了确定', 1000));

      // wx.showActionSheet({
      //   itemList: ['A', 'B', 'C'],
      //   success: (res) => {
      //     this.$tip(res.tapIndex);
      //   },
      //   fail: (res) => {
      //     this.$tip(res.errMsg)
      //   }
      // });
      console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
      console.log(this.$root.$mp.query);
      console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
      let id = (this.$root.$mp.query && this.$root.$mp.query.id) || "";
      id && this.getDetail(id);
      (this.currentPage <= this.totalPage) && this.getUserSong();
    },
    onUnload() {
      console.log('隐藏了2')
      this.hotSongs = [];
      this.userInfo = {};
      this.currentPage = 0;
    }
  }
</script>

<style>
  .imgs {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  .song-title {
    font-size: 33rpx;
  }
</style>