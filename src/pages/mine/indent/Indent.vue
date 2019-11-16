<template>
  <div class="page-wrap">
    <div class="page subpage" id="indent">
      <app-header title="我的订单" hasBack></app-header>
       <div class="content">
        <!-- 头部 -->
        <van-tabs
          color="#ff1268"
          title-inactive-color="#999"
          title-active-color="#333"
          :swipeable="true"
          line-height="0"
          @click="clickAction"
        >
          <van-tab
            v-for="(tab, index) in tablist"
            :title="tab.name"
            :key="index"
          ></van-tab>
        </van-tabs>

        <!-- 内容滚动 -->
        <app-scroll class="scrollContent">
        </app-scroll>
      </div>
    </div>
  </div>
</template>

<script>
// import GoodItem from "../../../components/app-good-item";
import { Tab, Tabs } from "vant";
export default {
  name: "indent",
  components: {
    // [GoodItem.name]: GoodItem,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  props: {},
  data() {
    return {
      active: 0,
      tablist: [
        {
          name: "全部"
        },
        {
          name: "待付款"
        },
        {
          name: "待收货"
        }
      ],
    };
  },
  methods: {
    clickAction() {}
  }
};
</script>

<style scoped lang="scss" scoped>
#indent {
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
}
</style>