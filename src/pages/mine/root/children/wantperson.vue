<template>
  <div class="page" id="address">
    <app-header title="关注的人" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <div class="d-scrollContent"></div>
    </app-scroll>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  data() {
    return {};
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
.d-scrollContent {
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