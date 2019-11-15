<template>
  <div class="page-wrap">
    <div class="page subpage" id="search">
      <search-top @sendSearchKey="searchKey" @sendStatus='status'></search-top>
      <div class="content">
        <search-history
          :historyList="searchKeyList"
          @sendSearchKey="searchKey"
        ></search-history>
        <hot-search @sendSearchKey="searchKey"></hot-search>
        <div class="mask" v-if="maskShow"></div>
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
      maskShow:false
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
    status(s){
      this.maskShow = s;
    }
  },
  mounted() {
    var keylist = JSON.parse(localStorage.getItem("searchKey"));
    if (keylist) {
      this.searchKeyList = keylist;
    }
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
.van-toast {
  min-width: 100px;
  padding: 40px 60px;
  font-size: 50px;
  border-radius: 40px;
}
.mask{
  width: 100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  background:#fff;
}
</style>
