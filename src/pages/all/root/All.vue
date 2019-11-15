<template>
  <div class="page-wrap">
    <!-- 首页 -->
    <div class="page" id="all">
      <app-header title="全部" hasBack>
        <van-icon name="search" slot="right-btn" class="right-btn" />
      </app-header>

      <div class="content">
        <!-- 头部 -->
        <van-tabs
          color="#ff1268"
          title-inactive-color="#111"
          title-active-color="#ff1268"
          :swipeable="true"
          line-height="0"
          v-model="activeIndex"
          @click="clickAction"
        >
          <van-tab
            v-for="classify in classifyArr"
            :title="classify.name"
            :key="classify.classify_id"
          ></van-tab>
        </van-tabs>

        <!-- 内容滚动 -->
        <app-scroll class="scrollContent">
          <good-list :goodsListArr="goodsListArr" :classify_id="classify_id"/>
        </app-scroll>
      </div>
    </div>
    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import commonService from "../../../services/commonService";
import allService from "../../../services/allService";
import { Tab, Tabs } from "vant";
import GoodList from "./children/Good-List";
export default {
  name: "all",
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [GoodList.name]: GoodList
  },
  props: {
    classify: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      classifyArr: [],
      goodsListArr: [],
      classify_id: 0,
      activeIndex: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 请求分类
    async requestClassify() {
      const result = await commonService.requestClassify();
      this.classifyArr = result.list;
    },

    // 根据分类请求数据 请求数据
    async requestGoodsList(classify_id) {
      // 请求初始化数据 本来需要带 classify_id
      const result = await allService.requestGoodsByClassifyId(classify_id);
      this.goodsListArr = result.list;
    },

    clickAction(classify_id) {
      // 拿到当前 tag 的 classify_id
      this.requestGoodsList(classify_id);  
    }
  },
  created() {
    // 初始化分类列表
    this.requestClassify();

    // 进来的时候，首先要判断是否带了参数，如果带了的话，需要根据参数请求，并且跳转到对应的 tag
    this.activeIndex = this.classify;
    console.log(this.activeIndex);
    console.log(this.classify);


    // 初始化商品数据
    this.requestGoodsList(
      // this.classifyArr[0] && this.classifyArr[0].classify_id
      this.classify
    );
  }
};
</script>

<style lang="scss">
$mainColor: #ff1268;
$padding: 40px;

.van-tabs--line .van-tabs__wrap {
  height: 165px;
  span {
    height: 165px;
    line-height: 165px;
    font-size: 46px;
  }
}

.scrollContent {
  position: absolute;
  top: 154px;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>