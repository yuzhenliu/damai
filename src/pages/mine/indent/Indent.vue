<template>
  <div class="page-wrap">
    <div class="page subpage" id="indent">
      <app-header title="我的订单" hasBack></app-header>
      <div class="content">
        <!-- 头部 -->
        <van-tabs v-model="activeIndex" class="yu-tabs">
          <van-tab :title="item.name" v-for="(item, index) in tablist" :key="index"></van-tab>
        </van-tabs>

        <!-- 内容滚动 -->
        <app-scroll class="scrollContent">
          <good-list :orderType="orderType" :id="id" />
        </app-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import GoodList from "./children/GoodList";
import { Tab, Tabs } from "vant";
export default {
  name: "indent",
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [GoodList.name]: GoodList
  },
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      activeIndex: 0,
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
      ]
    };
  },
  computed: {
    orderType() {
      if (this.activeIndex == 0) {
        return "all";
      } else if (this.activeIndex == 1) {
        return "toPay";
      } else if (this.activeIndex == 2) {
        return "toGet";
      }
    }
  }
};
</script>

<style scoped lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;
#indent {
  .scrollContent {
    position: absolute;
    top: 154px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f8f8f8;
  }
}
</style>
<style lang="scss">
.yu-tabs {
  height: 154px;
  line-height: 154px;

  .van-tabs__wrap {
    width: 100%;
    height: 100%;

    .van-tab {
      height: 154px;
      line-height: 154px;

      span {
        display: block;
        text-align: center;
        width: 100%;
        height: 154px;
        line-height: 154px;
        color: #333;
      }
    }
  }
}
</style>