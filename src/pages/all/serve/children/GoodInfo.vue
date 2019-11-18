<template>
  <div class="goodInfo">
    <div class="left">
      <img :src="goodInfo.picUrl" />
    </div>
    <div class="right">
      <h6>{{goodInfo.title}}</h6>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "good-info",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      // 正在浏览的商品
      goodInfo: state => state.all.serveGood
    })
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;
.goodInfo {
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;
  border-radius: 30px;
  box-sizing: border-box;
  padding: $padding;

  .left {
    width: 200px;
    height: 200px;
    border-radius: 40px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 40px;
    }
  }
  .right {
    margin-left: 30px;

    h6 {
      margin-top: 10px;
      font-size: 40px;
      font-weight: bold;
      color: #333;
    }
  }
}
</style>