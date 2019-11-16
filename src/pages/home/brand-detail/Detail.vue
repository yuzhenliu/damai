<template>
  <div class="page-wrap">
    <div class="page subpage" id="brand-detail">
      <brand-detail-top
        :name="name"
        @sendconcernAction="concernAction"
        :topIsconcern="isconcern"
        :classN='classN'
        ref="top"
      ></brand-detail-top>

      <app-scroll class="content" ref="scroll">
        <div class="info">
          <div class="info-bg">
            <img :src="backgroundImg" :alt="name" />
            
          </div>
          <div class="bg-mask"></div>

          <div class="avarImg">
            <img :src="avarImg" :alt="avarImg">
          </div>

          <van-icon name="arrow-left" class="back" @click="backAction" />
          <h4>{{ name }}</h4>
          <p>
            <span>{{ fansNum }}</span
            >万粉丝
          </p>
          <p>
            <span>{{ performanceNum }}</span
            >场在售演出
          </p>

        

          <div class="btnGroup">
            <span class="disable" v-if="isconcern == 'true'">已关注</span>
            <span class="concernbtn" v-else @click="concernAction">关注</span>
            <span class="sharebtn">分享</span>
          </div>
        </div>

        <div class="list" ref="list">
          <div class="title">
            演出
          </div>
          <app-good-item
            v-for="(good, index) in list"
            :key="index"
            :good="good"
          ></app-good-item>
        </div>



        <brand-detail-comment :commentList='commentList'></brand-detail-comment>
      </app-scroll>
    </div>
    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import homeService from "../../../services/homeService";
import brandDetailTop from "./children/detail-top";
import brandDetailcomment from "./children/detail-comment";
import appGoodItem from "../../../components/app-good-item";
import { mapMutations } from "vuex";
export default {
  components: {
    [brandDetailTop.name]: brandDetailTop,
    [brandDetailcomment.name]: brandDetailcomment,
    [appGoodItem.name]: appGoodItem
  },
  data() {
    return {
      key: "",
      list: [],
      searchKey: "",
      avarImg: "",
      backgroundImg:
        "https://tse2-mm.cn.bing.net/th?id=OIP.2RCmreexJ4AfNJk3PqFq9AHaFa&w=220&h=160&c=7&o=5&dpr=1.25&pid=1.7",
      fansNum: "",
      list: "",
      performanceNum: "",
      name: "",
      brand_id: "",
      maxprice: "",
      minprice: "",
      detail: "",
      commentList:[],
      isconcern: "",
      classN:''
    };
  },
  methods: {
    ...mapMutations({
      add: "concernListAction"
    }),
    backAction() {
      this.$router.back();
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
        detail,
        commentList
      } = await homeService.requestBrandDetail(this.key);
      this.avarImg = avarImg;
      this.backgroundImg = backgroundImg;
      this.fansNum = fansNum;
      this.name = name;
      this.maxprice = maxprice;
      this.minprice = minproce;
      this.detail = detail;
      this.performanceNum = performanceNum;
      this.list = list;
      this.commentList=commentList;
      // console.log(commentList);
    },
    concernAction() {
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
      sessionStorage.setItem("isconcern", "true");
      this.isconcern = "true";
    }
  },
  created() {
    this.initData();
    this.key = this.$route.params.key;
    const isconcern = sessionStorage.getItem("isconcern");
    this.isconcern = isconcern;
  },
  mounted() {
     let _this=this;
    this.$refs.scroll.scroll.on("scroll", function(pos) {
      if(Math.abs(pos.y)>_this.$refs.list.offsetTop){
        _this.classN='show';
      }else if(pos.y>30){
        _this.classN='hide';
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.list {
  // height:30000px;
  padding: 80px 0 60px;
}

.info {
  height: 790px;
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 0 40px;
  &-bg {
    height: 790px;
    width: 100%;
    position: absolute;
    z-index: -2;
    left: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
    
  }
  .bg-mask{
      width:100%;
      height: 100%;
      position: absolute;
      top:0;
      left:0;
      z-index:-1;
      background:linear-gradient(to bottom,transparent,rgba(0, 0, 0, 0.6))
    }
  .back {
    display: block;
    text-align: left;
    padding: 70px 0;
    font-size: 65px;
  }
  h4 {
    font-size: 65px;
    padding: 20px 0;
  }
  p {
    font-size: 40px;
    padding: 20px 0;
    span {
      font-size: 60px;
    }
  }
  .avarImg{
    position: absolute;
    right:40px;
    top:170px;
    width:250px;
    height:250px;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height:100%;
    }
  }
  .btnGroup {
    display: flex;
    padding-top: 20px;
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
      background: #fbe9ef82;
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
.list {
  border-radius: 65px;
  background: #fff;
  margin-top: -35px;
  position: relative;
  z-index: 2;
  .title{
    font-size:50px;
    color:#000;
    padding:0 0 70px 40px;;

  }
}
</style>
<style lang="scss">
#brand-detail {
  .goodItem {
    margin-bottom: 77px;
  }
  .content {
    top: 0;
  }
}
</style>
