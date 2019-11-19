<template>
  <div class="page-wrap">
    <!-- 首页 -->
    <div class="page" id="all">
      <app-header title="全部" hasBack>
        <van-icon
          name="search"
          slot="right-btn"
          class="right-btn"
          @click="toSearchAction"
        />
      </app-header>

      <div class="content">
        <!-- 头部 -->
        <van-tabs
          color="#ff1268"
          title-inactive-color="#111"
          title-active-color="#ff1268"
          :swipeable="true"
          line-height="0"
          @click="clickAction"
          v-model="classifyActiveIndex"
        >
          <van-tab
            v-for="classify in classifyArr"
            :title="classify.name"
            :key="classify.classify_id"
          ></van-tab>
        </van-tabs>

        <div class="chooseClassifyWrap" @click="showOrderAction">
          <van-icon name="orders-o" />
        </div>
        <div class="popup">
          <van-popup
            v-model="show"
            position="right"
            :style="{ height: '100%', width: '50%' }"
            closeable
          >
            <h6 class="title">分类导航</h6>
            <ul class="popupList">
              <li
                @click="changeClassifyAction(index, classify.classify_id)"
                v-for="(classify, index) in classifyArr"
                :key="classify.classify_id"
                class="popupListItem"
                :class="{ popActive: classifyActiveIndex == index }"
              >
                {{ classify.name }}
              </li>
            </ul>
          </van-popup>
        </div>

        <!-- 内容滚动 -->
        <app-scroll class="scrollContent">
          <good-list :goodsListArr="goodsListArr" />
        </app-scroll>
      </div>
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
import commonService from "../../../services/commonService";
import allService from "../../../services/allService";
import { Tab, Tabs, Popup } from "vant";
import GoodList from "./children/Good-List";
import Vue from "vue";
import store from "../../../store";
export default {
  beforeRouteEnter(to, from, next) {
    // 没有登录，进去登录页面
    if (!store.state.isLogin) {
      Vue.$router.push("/login");
      next(false);
    } else {
      next();
    }
  },
  name: "all",
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [GoodList.name]: GoodList,
    [Popup.name]: Popup
  },
  props: {},
  data() {
    return {
      classifyArr: [],
      goodsListArr: [],
      show: false,
      classifyActiveIndex: 0
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
    // 点击 tabbar 拿到分类请求数据
    clickAction(classify_id) {
      // 拿到当前 tag 的 classify_id
      this.requestGoodsList(classify_id);
    },
    // 显示订单选项
    showOrderAction() {
      this.show = true;
    },
    // 修改index的值 请求对应的数据
    changeClassifyAction(index, classify_id) {
      this.classifyActiveIndex = index;
      this.clickAction(classify_id);
    },
    // 跳转到搜索页面
    toSearchAction() {
      this.$router.push("/home/search");
    }
  },
  created() {
    // 初始化分类列表
    this.requestClassify();

    // 进来的时候，首先要判断是否带了参数，如果带了的话，需要根据参数请求，并且跳转到对应的 tag
    // this.activeIndex = this.classify;

    // 初始化商品数据
    this.requestGoodsList(
      this.classifyArr[0] && this.classifyArr[0].classify_id
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

// 显示订单
.chooseClassifyWrap {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  width: 120px;
  height: 120px;
  text-align: center;
  line-height: 120px;
  margin-top: 20px;
  border-left: 1px solid #eee;

  .van-icon {
    font-size: 60px;
    color: #333;
    vertical-align: middle;
  }
}

.popup {
  .title {
    margin-top: 180px;
    font-weight: bold;
    text-indent: 40px;
    font-size: 50px;
    color: #333;
  }
  .popupList {
    margin-top: 50px;

    .popupListItem {
      text-indent: 80px;
      margin: 50px;
      color: #444;
      font-size: 48px;
    }
    .popActive {
      color: $mainColor;
    }
  }
}
</style>
