<template>
  <header class="home-top">
       <div class="home-top-city" @click="toCityAction">
      <van-icon name="location" class="home-top-city-icon"/>
      <span>全国</span>
    </div>
    <div class="home-top-inp">
        <van-icon name="search" class="home-top-inp-icon"/>
        <input placeholder="搜索明星、演出比赛、场馆" />
    </div>
    <van-icon name="contact" class="home-top-userinfo" />
  </header>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toCityAction(){
            this.$router.push('/home/city');
        }
    }
};
</script>

<style lang="scss" scoped>
.home-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 154px;
  display: flex;
  line-height: 154px;
  background: #fff;
  &-city{
      font-size:50px;
      width:255px;
      text-align: center;
      &-icon{
          font-size: 48px;
          padding-right:10px;
      }
  }
  &-inp{
      flex:1;
      height:93px;
      font-size:30px;
      display: flex;
      margin:30px 0;
      padding-left:30px;
      line-height: 93px;
      background: linear-gradient(to right,#fff3e7,#ffeaf3,#f3effd);
      border-radius:46px 46px 46px 0;
      input{
          height:100%;
          flex: 1;
          font-size: 40px;
          color:#9c9ca4;
          border:none;
          background: transparent;
      }
      &-icon{
          font-size: 50px;
          color:#222;
          display: block;
          line-height: 93px;
          margin-right:10px;
      }
  }
  &-userinfo{
      display: block;
      font-size: 55px;
      line-height: 154px;
      padding:0 30px;
  }
}
</style>