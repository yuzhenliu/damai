<template>
  <div class="page-wrap">
    <!-- 首页 -->
    <div class="page" id="all">
      <app-header title="发现" hasBack />
      <app-scroll class="content">
        <!-- 轮播图的内容 -->
        <div class="swiperCon">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img src="../../../assets/find/qianxun.jpeg" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../assets/find/7.jpg" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../assets/find/9.jpg" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../assets/find/xiamu.jpeg" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="list" v-for="(item, index) in videoArr" :key="index">
          <video-list :title="item.title" :btnInfo="item.btnInfo"/>
        </div>
      </app-scroll>
    </div>
     <!-- 子页面 -->
    <transition
      enter-active-class="slideInRight"
      leave-active-class="slideOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import VideoList from './children/Video-List'
export default {
  name: "find",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VideoList.name]:VideoList
  },
  props: {},
  data() {
    return {
      videoArr: [
        {
          title: '先睹为快',
          btnInfo: '看视频'
        },
        {
          title: '冠岩热评',
          btnInfo: '看评论'
        },
        {
          title: '变身怪医',
          btnInfo: '看医生'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

#all {
  .content {
    // 轮播图
    .swiperCon {
      width: 100%;
      height: 700px;
      padding: $padding;
      box-sizing: border-box;

      .van-swipe {
        width: 100%;
        height: 100%;
        border-radius: 30px;

        .van-swipe-item {
          width: 100%;
          height: 100%;
          border-radius: 30px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 30px;
          }
        }
      }
    }

    .list {
      margin-top: 30px;
    }
  }
}
</style>
<style>
.van-swipe__indicator {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
</style>
