<template>
  <div class="recommend-list">
    <div v-for="item in list" :key="item.id" class="parent-list">
      <h4>{{ item.title }} <router-link to="./all" class="more">more</router-link></h4>

      <app-scroll class="list" :scrollX="scrollX" :scrollY="scrollY">
        <div
          v-for="(subitem, index) in item.list"
          :key="index"
          class="item"
          @click="toDetailAction(subitem.id)"
        >
          <img :src="subitem.imgUrl" :alt="subitem.name" />
          <i class="tag">{{ subitem.tag }}</i>
          <h4>{{ subitem.name }}</h4>
          <span class="price">￥{{ subitem.price }} <i>起</i></span>
        </div>
      </app-scroll>
    </div>
  </div>
</template>

<script>
import homeService from "../../../../services/homeService";
export default {
  components: {},
  data() {
    return {
      list: [],
      scrollX: true,
      scrollY: false
    };
  },
  methods: {
    async initData() {
      const { list } = await homeService.requestRecommendList();
      this.list = list;
      // console.log(list);
      this.$nextTick(() => {
        // console.log(this)
        // console.log(this.$refs.item.clientWidth);
      });
    },
    toDetailAction(id) {
      this.$router.push(`/all/detail/${id}`);
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
.recommend-list {
  padding: 20px 0;
  .parent-list {
    position: relative;
    h4 {
      font-size: 50px;
      height: 50px;
      position: relative;
    }
    .more {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 40px;
      border: 2px solid #333;
      display: block;
      padding: 10px;
      border-radius: 30px;
    }
    .list {
      margin: 40px 0;
      .item {
        width: 300px;
        padding-right: 20px;
        position: relative;
        img {
          width: 280px;
          height: 400px;
        }
        .tag {
          position: absolute;
          top: 10px;
          right: 35px;
          background: rgba($color: #000, $alpha: 0.5);
          color: #fff;
          padding: 10px;
          border-radius: 20px;
          font-size: 38px;
        }
        h4 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-top: 20px;
          font-size: 42px;
        }
        .price {
          color: #ea416b;
          i {
            font-size: 30px;
            color: #333;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.list {
  .scoll-wrap {
    display: flex;
    width: max-content;
  }
}
</style>
