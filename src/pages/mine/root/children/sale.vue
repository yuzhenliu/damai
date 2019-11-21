<template>
  <div class="page" id="address">
    <app-header title="优惠券" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <div class="dd-scrollContent">
        <van-tabs v-model="active">
          <van-tab title="未使用"></van-tab>
          <van-tab title="已过期"></van-tab>
          <van-tab title="已使用"></van-tab>
        </van-tabs>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>

<style  lang="scss">
#mine {
  height: 100%;
}
#address {
  z-index: 90;
  background: #fff;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
.dd-scrollContent {
  position: absolute;
  top: 154px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
}
.van-tabs--line .van-tabs__wrap {
  height: 100px;
}
.van-tab span {
  line-height: 100px;
}
</style>