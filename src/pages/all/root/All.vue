<template>
  <div class="page-wrap">
    <!-- 首页 -->
    <div class="page" id="all">
      <app-header title="全部" hasBack>
        <van-icon name="search" slot="right-btn" class="right-btn" />
      </app-header>
      <!-- <div class="content"> -->
        <app-scroll class="content">
        <van-tabs
          color="#ff1268"
          title-inactive-color="#111"
          title-active-color="#ff1268"
          :swipeable="true"
          line-height="0"
          @click="clickAction"
          :sticky="true"
        >
          <van-tab
            v-for="item in classifyArr"
            :title="item.name"
            :key="item.classify_id"
            :border="false"
          >
          <!-- <h1>城市选择</h1> -->
          <!-- <app-scroll class="scrollContent"> -->
            <app-good-item
              v-for="good in goodsListArr"
              :key="good.id"
              :good="good"
              class="app-good-item"
            />
            <!-- </app-scroll> -->
          </van-tab>
        </van-tabs>
      </app-scroll>
      <!-- </div> -->
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
import GoodItem from "../../../components/app-good-item";
import { Tab, Tabs } from "vant";
export default {
  name: "all",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [GoodItem.name]: GoodItem
  },
  props: {},
  data() {
    return {
      classifyArr: [],
      goodsListArr: []
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

    // 初始化商品数据 默认为全部
    this.requestGoodsList(
      this.classifyArr[0] && this.classifyArr[0].classify_id
    );
  }
};
</script>

<style lang="scss">
$mainColor: #ff1268;

.van-tabs--line .van-tabs__wrap {
  height: 165px;
  span {
    height: 165px;
    line-height: 165px;
    font-size: 46px;
  }
}
// .scrollContent {
//   position: absolute;
//   // top: 165px;
//   // bottom: 0;
//   left: 0;
//   width: 100%;
//   overflow: hidden;
// }
.app-good-item {
  margin: 39px 0;
}
</style>