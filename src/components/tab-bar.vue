<template>
  <nav class="tab-bar border-top">
    <router-link class="tab-item" v-for="item in tablist" :key="item.id" :to="item.path">
      <van-icon class="icon" :name="item.icon" />
      {{item.title}}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      tablist: [
        { id: 1, path: "/home", title: "首页", icon: "home-o" },
        { id: 2, path: "/all", title: "全部", icon: "description" },
        { id: 3, path: "/find", title: "发现", icon: "search" },
        { id: 4, path: "/wallet", title: "票夹", icon: "coupon-o" },
        { id: 5, path: "/mine", title: "我的", icon: "user-o" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.tab-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  .tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
    .icon {
      font-size: 24px;
      margin-bottom: 5px;
    }
    .title {
      font-size: 12px;
    }
    &.router-link-active {
      color: #f5053d;
    }
  }
}
</style>