<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tab-bar";
import commonService from './services/commonService'
export default {
  components: {
    [TabBar.name]: TabBar
  },
  methods: {
    // async initData(){
    //   // 请求初始化数据
    //   const result = await commonService.requestCityList();
    //   console.log(result);
    // }
  },
  created() {
    // this.initData()
  }
};
</script>

<style lang="scss">
  $mainColor: #ff1268;
</style>