<template>
<van-swipe class="banner" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in list" :key='item.id'>
    <img :src="item.picUrl"/>
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import homeService from '../../../../services/homeService'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
 data(){
   return{
       list:[]
   }
 },
 methods:{
   async initData(){
     const {bannerList} =await homeService.requestHomeBannerList();
     this.list=bannerList;
   }
 },
 created(){
   this.initData();
 }
}
</script>

<style scoped lang="scss">
.banner {
  background: #fafafa;
  img{
    width: 100%;
  }
}
</style>

<style lang="scss">
.van-swipe__indicator{
    width: 20px;
    height: 20px;
}
.banner{
  border-radius: 30px;
}

</style>

