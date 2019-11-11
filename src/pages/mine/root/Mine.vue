<template>
  <div class="page" id="mine">
    <h1>我的页面</h1>
  </div>
</template>

<script>
import store from "../../../store";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  beforeRouteEnter(to, from, next) {
    console.log(store.state.isLogin);
    //没有进入登录界面
    if (!store.state.isLogin) {
      next("/login");
    } else {
      next();
    }
  }
};
</script>

<style>
</style>