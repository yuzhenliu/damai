<template>
<div class="app-header border-bottom">
  <van-icon v-if="hasBack" class="back-btn" name="arrow-left" @click="backAction"/>
  <h1 class="title text-overflow">{{title}}</h1>
  <slot name="right-btn"/>
</div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    title: {
      type: String,
      required: true
    },
    hasBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backAction(){
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="scss">
.app-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 154px;
    .title{
      width: 70%;
      margin: 0 auto;
      height: 154px;
      line-height: 154px;
      text-align: center;
      font-size: 56px;
    }
    .back-btn{
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 35px;
      font-size: 70px;
      line-height: 154px;
    }
  }
</style>