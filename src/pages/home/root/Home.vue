<template>
  <div class="page" id="home">
    <HomeTop />
      <app-scroll class="content">
        <banner />
        <classifyList />
        <recommendList />
      </app-scroll>
  </div>
</template>

<script>
import HomeTop from "./children/home-top";
import banner from "./children/banner";
import classifyList from "./children/classify-list";
import recommendList from "./children/recommend-list";
// import { } from '../../../services/homeService'
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