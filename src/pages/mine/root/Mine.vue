<template>
  <div class="page" id="mine">
    <h1>我的页面</h1>
  </div>
</template>

<script>
import store from "../../../store";
import router from "../../../router";
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
  // beforeRouteEnter(to, from, next) {
  //   console.log(store.state.isLogin);
  //   if (!store.state.isLogin) {
  //     router.push("/mine/login");
  //   } else {
  //     next();
  //   }
  // },
  created() {
    if (!store.state.isLogin) {
      router.push("/mine/login");
    } else {
    }
  }
};
</script>

<style>
</style>