<template>
  <div class="page" id="address">
    <app-header title="我的地址" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <h1>{{ list }}</h1>
    </app-scroll>
  </div>
</template>

<script>
import mineService from "../../../services/mineService";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    async initData() {
      const result = await mineService.requestAddressList();
      this.list = result;
      console.log(this.list);
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style scoped lang="scss">
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
</style>
