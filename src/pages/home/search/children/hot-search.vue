<template>
  <div class="hot-search">
    <div class="hot-search-head">
      <span>热搜榜</span>
      <van-icon name="fire" class="fire" />
    </div>
    <ul class="hot-search-list">
      <li
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="searchAction(item.name)"
      >
        <div class="cont">
          <div class="img">
            <div class="top">
              <span v-if="index < 4">TOP.</span>
              <span>{{ index + 1 }}</span>
            </div>
            <img :src="item.avarImg" :alt="item.name" v-if="index < 4" />
          </div>
          <h3>{{ item.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import homeService from "../../../../services/homeService";
export default {
  name: "hot-search",
  data() {
    return {
      list: []
    };
  },
  methods: {
    async initData() {
      const { list } = await homeService.searchHotList();
      this.list = list;
    },
    searchAction(item) {
      this.$emit("sendSearchKey", item, "");
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
.hot-search {
  padding-top: 100px;
  &-head {
    font-weight: bold;
    font-size: 50px;
    position: relative;
    span {
      padding-right: 20px;
    }
    .fire {
      position: absolute;
      // right:0;
      color: #ec6d3d;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    .item {
      width: 50%;
      font-size: 40px;
      margin-bottom: 60px;
      position: relative;
      span {
        color: #ea4479;
      }
      .img {
        position: absolute;
        left: 30px;
      }
      img {
        width: 180px;
        height: 180px;
        margin-bottom: 20px;
        display: inline-block;
        border-radius: 50%;
      }
      h3 {
        padding-left: 80px;
      }
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3),
      &:nth-of-type(4) {
        width: 25%;
        .cont {
          width: 90%;
          margin: 0 auto;
          box-shadow: 6px 6px 12px 0px #eee;
          text-align: center;
          padding: 30px 0;
          .img {
            width: 100%;
            text-align: center;
            position: relative;
            height: 180px;
            width: 1.6rem;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            left: 0;
          }
          h3 {
            padding-left: 0;
            margin-top: 30px;
          }
          .top {
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            bottom: 0;
            height: 55px;
            width: 180px;
            text-align: center;
            background: linear-gradient(to right, #f19ea2, #ea4d7f);

            span {
              color: #fff;
              font-weight: bolder;
              position: relative;
              top: -10px;
            }

            &:after {
              content: "";
              height: 50px;
              display: block;
              position: absolute;
              bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
