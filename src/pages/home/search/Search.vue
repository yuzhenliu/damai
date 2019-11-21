<template>
  <div class="page-wrap">
    <div class="page subpage" id="search">
      <search-top @sendSearchKey="searchKey" @sendStatus="status"></search-top>
      <div class="content">
        <search-history
          :historyList="searchKeyList"
          @sendSearchKey="searchKey"
          @sendhistoryHanle="historyHanle"
        ></search-history>
        <hot-search @sendSearchKey="searchKey"></hot-search>
        <div class="hui-mask" v-if="maskShow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import searchTop from "./children/search-top";
import searchHistory from "./children/search-history";
import hotSearch from "./children/hot-search";
export default {
  name: "search",
  components: {
    [searchTop.name]: searchTop,
    [searchHistory.name]: searchHistory,
    [hotSearch.name]: hotSearch
  },
  data() {
    return {
      searchKeyList: [],
      maskShow: false
    };
  },
  methods: {
    searchKey(key, from) {
      if (from !== "history") {
        this.searchKeyList.push(key);
        localStorage.setItem("searchKey", JSON.stringify(this.searchKeyList));
      }
      this.$router.replace(`/home/brand/${key}`);
    },
    status(s) {
      this.maskShow = s;
    },
    keySearch() {
      // http://suggestion.baidu.com/su?wd=
    },
    historyHanle() {
      var keylist = JSON.parse(localStorage.getItem("searchKey"));
      console.log(1);
      if (keylist) {
        this.searchKeyList = keylist;
      }else{
        this.searchKeyList=[];
      }
    }
  },
  mounted() {
    this.historyHanle();
  }
};
</script>

<style lang="scss" scoped>
#search {
  .content {
    padding: 0 40px;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
.hui-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
}
</style>
