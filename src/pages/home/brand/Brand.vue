<template>
  <div class="page-wrap">
    <div class="page subpage" id="brand">
      <brand-top :backgroundImg='backgroundImg' ref="top" :topOpcity='topOpcity'></brand-top>
      <app-scroll class="content" :bounce='bounce' ref='scroll'>
        
        <div class="brand-head" @click="toBrandDetailAction">
          <div class="brand-head-bg">
            <img :src="backgroundImg" :alt="name">
          </div>
          <div class="brand-head-info" ref="info">
            <div class="brand-head-info-left">
              <img :src="avarImg" :alt="name" />
              <div class="text">
                <h3>{{ name }} <van-icon name="arrow" class="arrow" /></h3>
                <span>{{ performanceNum }}场在售演出 | {{ fansNum }}粉丝</span>
              </div>
            </div>
            <div class="brand-head-info-right" @click.stop="concernAction">
              关注
            </div>
          </div>
        </div>


        <div class="list">
            <app-good-item v-for="(good,index) in list" :key="index" :good='good'></app-good-item>

        </div>
      </app-scroll>

    
    </div>
    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import brandTop from "./children/brand-top";
import brandList from "./children/brand-list";
import homeService from "../../../services/homeService";
import { mapMutations } from "vuex";
import appGoodItem from '../../../components/app-good-item'
export default {
  components: {
    [brandTop.name]: brandTop,
    [brandList.name]: brandList,
    [appGoodItem.name]:appGoodItem
  },
  data() {
    return {
      list: [],
      searchKey: "",
      avarImg: "",
      backgroundImg: "https://tse2-mm.cn.bing.net/th?id=OIP.2RCmreexJ4AfNJk3PqFq9AHaFa&w=220&h=160&c=7&o=5&dpr=1.25&pid=1.7",
      fansNum: "",
      list: "",
      performanceNum: "",
      name: "",
      brand_id: "",
      maxprice: "",
      minprice: "",
      detail: "",
      bounce:false,
      topOpcity:0,
    };
  },
  methods: {
    ...mapMutations({
      add: "concernListAction"
    }),
    concernAction(ev) {
     if(localStorage.getItem('isLogin')=='true'){
         //判断是否存在disable class
     if(ev.target.classList.contains('disable')){ 
       return;  
     }

    //  不存在保存关注数据，并修改按钮样式
      this.add({
        avarImg: this.avarImg,
        name: this.name,
        performanceNum: this.performanceNum,
        fansNum: this.fansNum,
        title: this.list[0].title,
        detail: this.detail,
        minprice: this.minprice,
        maxprice: this.maxprice,
        tag: this.list[0].tags
      });
      ev.target.classList.add("disable");
      ev.target.innerText='已关注';
      sessionStorage.setItem('isconcern',true);
     }else{
      this.$router.push({
         name:'login'
       });
     }
    },
    async initData() {
      const {
        avarImg,
        backgroundImg,
        fansNum,
        list,
        performanceNum,
        name,
        brand_id,
        maxprice,
        minproce,
        detail
      } = await homeService.searchBrandByKey(this.searchKey);
      this.avarImg = avarImg;
      this.backgroundImg = backgroundImg;
      this.fansNum = fansNum;
      this.name = name;
      this.maxprice = maxprice;
      this.minprice = minproce;
      this.detail = detail;
      this.performanceNum = performanceNum;
      this.list = list;

    },
    toBrandDetailAction(){
        this.$router.push({
            name:'detail'
            // params: { id: this.brand_id}
        });
    }
  },
  created() {
    // 获取路由参数  传值请求数据
    this.searchKey = this.$route.params.key;
    this.initData();
  },
  mounted(){
      // console.log(this.backgroundImg);
      console.log();
      let _this=this;
      this.$refs.scroll.scroll.on('scroll',function(){
        // console.log();
        if(Math.abs(this.y)<=_this.$refs.info.clientHeight){
          _this.topOpcity=0;
        }else{
          _this.topOpcity=1;
        }
      })
  },
  destroyed(){
      sessionStorage.removeItem('isconcern');
  }
};
</script>

<style lang="scss" scoped>
#brand{
    .content{
        top:0;
    }
}
.brand-head {
  height: 415px;
  width: 100%;
  // background: darkgoldenrod;
  position: relative;
  &-bg{
    width:100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 0;
    transition: all 0.5s ease;
    img{
      width:100%;
      height:100%;
    }
  }
  &-info {
    display: flex;
    padding: 190px 40px 0;
    position: relative;
    &-left {
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
      }
      .text {
        display: inline-block;
        color: #fff;
        padding-left: 20px;
        vertical-align: top;
        padding-top: 10px;
        h3 {
          font-size: 45px;
          .arrow {
            vertical-align: top;
          }
        }
        span {
          padding-top: 30px;
          display: block;
        }
      }
    }
    &-right {
      position: absolute;
      right: 40px;
      width: 175px;
      height: 75px;
      border: 3px solid #dfe1e5;
      background: #a1a7b1;
      border-radius: 40px;
      font-size: 40px;
      font-weight: bold;
      color: #dfe1e5;
      text-align: center;
      line-height: 75px;
    }
    .disable {
      opacity: 0.7;
    }
  }
}

.list{
    // height:30000px;
    padding:80px 0 60px;
}
</style>
<style lang="scss">
#brand{
    .goodItem{
        margin-bottom: 77px;
    }
}
</style>
