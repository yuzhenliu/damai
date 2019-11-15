<template>
  <div class="page-wrap">
    <div class="page subpage" id="brand">
      <brand-top></brand-top>
      <app-scroll class="content">
        <div class="brand-head" v-bind:style="{ background: backgroundImg }" @click="toBrandDetailAction">
          <div class="brand-head-info">
            <div class="brand-head-info-left">
              <img :src="avarImg" :alt="name" />
              <div class="text">
                <h3>{{ name }} <van-icon name="arrow" class="arrow" /></h3>
                <span>{{ performanceNum }}场在售演出 | {{ fansNum }}粉丝</span>
              </div>
            </div>
            <div class="brand-head-info-right" @click="concernAction">
              关注
            </div>
          </div>
        </div>


        <div class="list">

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
export default {
  components: {
    [brandTop.name]: brandTop,
    [brandList.name]: brandList
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
      detail: ""
    };
  },
  methods: {
    ...mapMutations({
      add: "concernListAction"
    }),
    concernAction(ev) {
     if(ev.target.classList.contains('disable')){
       return;  
     }
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
        minprice,
        detail
      } = await homeService.searchBrandByKey(this.searchKey);
      this.avarImg = avarImg;
      this.backgroundImg = backgroundImg;
      this.fansNum = fansNum;
      this.name = name;
      this.maxprice = maxprice;
      this.minprice = minprice;
      this.detail = detail;
      this.performanceNum = performanceNum;
      this.list = list;

    },
    toBrandDetailAction(){
        this.$router.push({
            name:'detail'
        });
    }
  },
  created() {
    this.searchKey = this.$route.params.key;
    this.initData();
  },
  mounted(){
      console.log(this.backgroundImg);
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
  background: darkgoldenrod;
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
      //   top:50%;
      //   transform: translateY(-50%);
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
    height:30000px;
}
</style>
