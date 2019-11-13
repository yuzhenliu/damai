<template>
  <div class="page-wrap">
    <div class="page subpage" id="city">
      <app-header title="城市选择" :hasBack="hasBack"></app-header>

      <app-scroll class="content" ref="scroll">
        <div class="currentCity">
          <span>当前定位城市</span>
          <p>深圳</p>
        </div>

        <div class="city-list">
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
      index: -1
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
      this.scrollArr.push(data);
    },
    indexBar(index) {
      this.index = index;
      console.log(index);
    }
  },
  created() {
    this.initData();
  },
  mounted() {

  },
  watch: {
    index(newVal) {
      let scrollObj = this.$refs.scroll.scroll;
      let y = this.scrollArr[this.index];
      scrollObj.scrollTo(0,-y);
    }
  }
};
</script>

<style lang="scss" scoped>
.city {
  width: 100%;
  height: 100%;
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
    border: 2px solid #e7e7e7;
    line-height: 100px;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
  }
}
</style>

<style lang="scss">
.city-list {
  .index-cell:nth-of-type(1) {
    .index-cell-list {
      display: flex;
      flex-wrap: wrap;
      .index-cell-item {
        width: 310px;
        height: 100px;
        border: 2px solid #e7e7e7;
        line-height: 100px;
        text-align: center;
        margin: 20px;
        border-radius: 10px;
        padding: 0;
      }
    }
  }
}
</style>
