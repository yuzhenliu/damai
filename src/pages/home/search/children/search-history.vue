<template>
  <div class="search-history">
    <div class="search-history-head">
      <span>搜索历史</span>
      <van-icon name="delete" class="delete" @click="deleteHistory" />
    </div>
    <ul class="search-history-list" >
      <li
        class="item"
        v-for="(item, index) in historyList"
        :key="index"
        @click="searchAction(item)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "search-history",
  props: {
    historyList: {
      type: Array
    }
  },
  data() {
    return {
      DhistoryList: this.historyList
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    deleteHistory() {
      // this.historyList=[];
      Dialog.confirm({
        title: "确认清空搜索历史",
        message: ""
      })
        .then(() => {
          // on confirm
          localStorage.removeItem('searchKey');
          this.$emit('sendhistoryHanle');
          console.log(this.historyList);
          this.historyList=this.DhistoryList;

        })
        .catch(() => {
          // on cancel
          return;
        });
    },
    searchAction(item) {
      this.$emit("sendSearchKey", item, "history");
    }
  }
};
</script>

<style lang="scss" scoped>
.search-history {
  padding-top: 100px;
  &-head {
    font-weight: bold;
    font-size: 50px;
    position: relative;
    .delete {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    .item {
      padding: 35px 45px;
      font-size: 40px;
      box-shadow: 6px 6px 12px 0px #eee;
      margin: 0 30px 30px 0;
    }
  }
}
</style>
<style lang="scss">

  .van-dialog {
    
    font-size: 56px;;
    border-radius: 56px;
    .van-dialog__header {
      padding-top: 84px;
      font-weight: 500;
      line-height: 84px;
      text-align: center;
    }
    .van-dialog__message--has-title {
      padding-top: 50px;
      color: #7d7e80;
    }
    .van-dialog__message {
      max-height: 60vh;
      padding: 84px;
      overflow-y: auto;
      font-size: 49px;
      line-height: 70px;
      white-space: pre-wrap;
      text-align: center;
      word-wrap: break-word;
      -webkit-overflow-scrolling: touch;
    }
    .van-button--large {
      width: 100%;
      height: 175px;
      line-height: 175px;
      font-size: 56px;
    }
  }

</style>
