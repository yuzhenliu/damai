<template>
  <div class="page-wrap">
    <div class="page subpage" id="city">
      <app-header title="城市选择" :hasBack="hasBack"></app-header>

      <app-scroll class="content" ref="scroll">
        <div class="currentCity" @click="citylistAction">
          <span>当前定位城市</span>
          <p class="index-cell-item" :data-city="currentCity">{{currentCity}}</p>
        </div>

        <div class="city-list" @click="citylistAction">
          <index-cell
            v-for="(item, index) in areas"
            :key="index"
            :item="item"
            @indexCellHandle="indexCell"
          ></index-cell>
        </div>
      </app-scroll>

      <index-bar :indexList="indexList" @indexBarHandel="indexBar"> </index-bar>
    </div>
  </div>
</template>

<script>
import indexBar from "./children/index-bar";
import indexCell from "./children/index-cell";
import commonService from "../../../services/commonService";
import { mapMutations } from "vuex";
export default {
  components: {
    indexBar,
    indexCell
  },
  data() {
    return {
      hasBack: true,
      indexList: [],
      areas: [],
      scrollArr: [],
      index: -1,
      currentCity:'定位中..'
    };
  },
  methods: {
    async initData() {
      const result = await commonService.requestCityList();
      this.areas = result;
      this.areas[0].prefix = "热门城市";
      result.map(item => {
        this.indexList.push(item.prefix);
      });
      this.indexList[0] = "热";
    },
    indexCell(data) {
      this.scrollArr.push(data); //获取到每个index-cell的offsetTop高度保存数组
    },
    indexBar(index) {
      this.index = index; // 保存index-bar 点击的index
    },
    ...mapMutations({
      selectCityAction: "selectCityAction"
    }),
    citylistAction(ev) {
      let target = ev.target;
      if (target.className == "index-cell-item") {
        let selectCity = target.getAttribute("data-city"); //事件委托保存选中的city
        this.selectCityAction(selectCity);
        this.$router.push("/");
      }
    }
  },
  created() {
    this.initData();
  },
  mounted() {
    //获取当前城市
    let geolocation = new BMap.Geolocation();
    let _this=this;
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        let lat = r.address.lat; //当前经度
        let lng = r.address.lng; //当前纬度
        let province = r.address.province; //返回当前省份
        let city = r.address.city; //返回当前城市
        city=city.substr(0,city.length-1);
        _this.currentCity=city;
      }
    });
  },
  watch: {
    index(newVal) {
      //监听到index发生变化
      let scrollObj = this.$refs.scroll.scroll;
      let y = this.scrollArr[this.index];
      scrollObj.scrollTo(0, -y); //视图滚动到对应位置
    }
  }
};
</script>

<style lang="scss" scoped>
#city {
  width: 100%;
  height: 100%;
  background: #f2f3f4;
}

.currentCity {
  span {
    padding: 0 56px;
    font-size: 50px;
    line-height: 112px;
    background: #f2f3f4;
    display: block;
  }
  p {
    width: 310px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
    font-size: 49px;
    background: #fff;
  }
}
</style>

<style lang="scss">
.city-list {
  background: #f2f3f4;
  .index-cell:nth-of-type(1) {
    .index-cell-list {
      display: flex;
      flex-wrap: wrap;
      .index-cell-item {
        width: 31%;
        height: 0.88889rem;
        /* border: 0.01778rem solid #e7e7e7; */
        line-height: 0.88889rem;
        text-align: center;
        margin: 1%;
        border-radius: 0.08889rem;
        padding: 0;
      }
    }
  }
}
</style>
