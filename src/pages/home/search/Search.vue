<template>
  <div class="page-wrap">
    <div class="page subpage" id="search">
        <search-top @sendSearchKey="searchKey"></search-top>
      <div class="content">
        <search-history :historyList='searchKeyList'></search-history>
      </div>
    </div>
  </div>
</template>

<script>
import searchTop from "./children/search-top";
import searchHistory from "./children/search-history";
export default {
  name: "search",
  components: {
    [searchTop.name]: searchTop,
    [searchHistory.name]:searchHistory
  },
  data() {
    return {
      searchKeyList: []
    };
  },
  methods: {
    searchKey(key) {
      this.searchKeyList.push(key);
      localStorage.setItem("searchKey", JSON.stringify(this.searchKeyList));
    }
  },
  mounted(){
    //  let searchKey=JSON.parse(localStorage.getItem("searchKey"));
     this.searchKeyList=JSON.parse(localStorage.getItem("searchKey"))
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
</style>
