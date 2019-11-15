<template>
  <div class="goodItem" @click="getDetailInfo(good.id)">
    <div class="left">
      <img :src="good.picUrl" />
      <span class="flag">{{good.flag}}</span>
    </div>
    <div class="right">
      <h3 class="title">{{good.title}}</h3>
      <p class="time text-overflow">{{good.time}}</p>
      <p class="address text-overflow">{{good.address}}</p>
      <p class="tag">
        <span>{{good.tags}}</span>
      </p>
      <p class="priceWrap">
        <i class="price">{{good.price}}</i>起
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-good-item",
  components: {},
  props: {
    good: {
      type: Object,
      default: {}
    },
    classify_id: {
      type: [Number, String]
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    // 跳转到详情页
    getDetailInfo(id) {
      this.$router.push(`/all/${this.classify_id}/detail/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;

.goodItem {
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  padding: 0 45px;
  display: flex;

  .left {
    width: 300px;
    height: 400px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
    .flag {
      position: absolute;
      right: 6px;
      top: 8px;
      padding: 10px;
      background-color: rgba(0, 0, 0, .6);
      color: #f8f8f8;
      border-radius: 10px;
    }
  }
  .right {
    margin-left: 32px;

    .title {
      position: relative;
      line-height: 70px;
      font-size: 46px;
      font-weight: bold;
      height: 110px;
      overflow: hidden;
      text-align: 20px;
      color: #111;
    }
    .time {
      margin-top: 28px;
      font-size: 30px;
      color: #8c92a1;
      width: 100%;
    }
    .address {
      margin-top: 17px;
      font-size: 30px;
      color: #8c92a1;
      width: 100%;

    }
    .tag {
      margin-top: 20px;

      span {
        display: inline-block;
        border: 2px solid #8c92a1;
        padding: 12px 16px;
        color: #6d7a97;
        font-size: 26px;
        border-radius: 30px;
      }
    }
    .priceWrap {
      width: 100%;
      font-size: 34px;
      color: #8c92a1;
      margin-top: 34px;

      .price {
        font-size: 44px;
        font-weight: bold;
        color: $mainColor;
        margin: 0 12px;
      }
    }
  }
}
</style>