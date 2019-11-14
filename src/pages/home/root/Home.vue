<template>
  <div class="page-warp">
    <div class="page" id="home">
      <HomeTop />
      <app-scroll class="content">
        <banner />
        <classifyList />
        <recommendList />
      </app-scroll>
    </div>
    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HomeTop from "./children/home-top";
import banner from "./children/banner";
import classifyList from "./children/classify-list";
import recommendList from "./children/recommend-list";
export default {
  name: "home",
  components: {
    HomeTop,
    banner,
    classifyList,
    recommendList
  }
};
</script>
  
<style>
#home .content {
  width: 1000px;
  transform: translateX(-50%);
  left: 50%;
}
</style>