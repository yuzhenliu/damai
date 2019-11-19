<template>
  <div class="page" id="find">
    <h1>发现</h1>
  </div>
</template>

<script>
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
  }
};
</script>

<style></style>
