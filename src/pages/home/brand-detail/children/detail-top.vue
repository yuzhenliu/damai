<template>
  <div class="detail-top" :class="classN">
    <van-icon name="arrow-left" @click="backAction" class="back" />
    <h5 @click="backAction" >{{ name }}</h5>
    <p class="btngrounp">
      <span class="disable" v-if="isconcern == 'true'">已关注</span>
      <span class="concernbtn" v-else @click="topConcernAction">关注</span>
      <span class="sharebtn">分享</span>
    </p>
  </div>
</template>

<script>

export default {
  name: "brand-detail-top",
  data() {
    return {
      key: "",
      isconcern: ""
    };
  },
  props:{
    name:'',
    topIsconcern:'',
    classN:'',
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    topConcernAction(){
      this.$emit('sendconcernAction');
      this.isconcern='true';
    }
  },
  created() {
    this.key = this.$route.params.key;
  },
  watch:{
    topIsconcern(newVal){
      this.isconcern=newVal;
    }
  }

};
</script>

<style lang="scss" scoped>
.detail-top {
  width: 100%;
  padding: 30px 40px;
  display: flex;
  box-sizing: border-box;
  position:absolute;
  top:0;
  left:0;
  opacity: 0;
  z-index: 2;
  background: #fff;
  transition: all 0.2s ease;
  &.show{
    opacity: 1;
  }
  &-hide{
    opacity: 0;
  }
  .back {
    font-size: 55px;
    color: #333;
    font-size: 50px;
  }
  h5 {
    font-size: 48px;
    padding-left: 20px;
    flex: 1;
  }
  .btngrounp {
    display: flex;
    span {
      width: 175px;
      height: 70px;
      border-radius: 40px;
      display: block;
      font-size: 40px;
      text-align: center;
      line-height: 70px;
    }
    .concernbtn {
      background: #ea416b;
      color: #fff;
    }
    .sharebtn {
      background: #fbe9ef;
      color: #ea416b;
      margin-left: 30px;
    }
    .disable {
      opacity: 0.7;
      background: #ea416b;
      color: #fff;
    }
  }
}
</style>
