<template>
  <div class="page-wrap">
    <div class="page subpage" id="brand-detail">
      <brand-detail-top
        :name="name"
        @sendconcernAction="concernAction"
        :topIsconcern='isconcern'
      ></brand-detail-top>

      <app-scroll class="content">
        <div class="info">
          <div class="info-bg">
            <img :src="backgroundImg" :alt="name" />
          </div>
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
            <!-- <span class="disable" v-if="isconcern == 'true'">已关注</span>
            <span class="concernbtn" v-else @click="topConcernAction"
              >关注</span
            >
            <span class="sharebtn">分享</span> -->
          </div>
        </div>

        <div class="list">
          <app-good-item
            v-for="(good, index) in list"
            :key="index"
            :good="good"
          ></app-good-item>
        </div>
      </app-scroll>
    </div>
  </div>
</template>

<script>
import homeService from "../../../services/homeService";
import brandDetailTop from "./children/detail-top";
import appGoodItem from "../../../components/app-good-item";
import { mapMutations } from "vuex";
export default {
  components: {
    [brandDetailTop.name]: brandDetailTop,
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
      isconcern:""
    };
  },
  methods: {
    ...mapMutations({
      add: "concernListAction"
    }),
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
      console.log(1);
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
    }
  },
  created() {
    this.initData();
    this.key = this.$route.params.key;

    const isconcern = sessionStorage.getItem("isconcern");
    this.isconcern = isconcern;
  }
};
</script>

<style lang="scss" scoped>
.list {
  // height:30000px;
  padding: 80px 0 60px;
}
</style>
<style lang="scss">
#brand-detail {
  .goodItem {
    margin-bottom: 77px;
  }
}
</style>
