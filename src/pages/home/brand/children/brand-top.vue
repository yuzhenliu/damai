<template>
  <div class="brand-top">
    <div class="background-blur" v-show="topOpcity == 1">
      <img :src="backgroundImg" alt="" />
    </div>
    <div class="brand-top-search">
      <div class="brand-top-search-inp">
        <van-icon name="brand" class="brand-top-search-inp-icon" />
        <input
          placeholder="搜索明星、演出比赛、场馆"
          v-model="inpVal"
          @focus="toSearchAction(inpVal)"
          type="text"
        />
        <van-icon name="cross" @click="toSearchAction(null)" class="cross" />
      </div>
      <div class="cancel" @click="backHomeAction">
        取消
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "brand-top",
  data() {
    return {
      inpVal: ""
    };
  },
  props: ["backgroundImg", "topOpcity"],
  methods: {
    toSearchAction(f) {
      if (f) {
        this.$router.replace(`/home/search?key=${f}`);
      } else {
        this.$router.replace("/home/search");
      }
    },
    backHomeAction() {
      this.$router.push(`/home`);
    }
  },
  created() {
    this.inpVal = this.$route.params.key;
    console.log(this.topOpcity);
  }
};
</script>

<style lang="scss" scoped>
.background-blur {
  // background: darkgoldenrod;
  filter: blur(6px);
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s ease;
  left: 0;
  right: 0;
}
.brand-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 154px;
  // background: darkgoldenrod;
  z-index: 100;
}
.brand-top-search {
  display: flex;
  line-height: 154px;
  padding: 0 40px;
  box-sizing: border-box;
  z-index: 1;
  &-inp {
    flex: 1;
    height: 93px;
    font-size: 30px;
    display: flex;
    margin: 30px 0;
    padding-left: 30px;
    line-height: 93px;
    background: #fff;
    border-radius: 46px 46px 46px 0;
    padding-left: 40px;
    position: relative;
    input {
      height: 100%;
      flex: 1;
      font-size: 40px;
      color: #9c9ca4;
      border: none;
      background: transparent;
    }
    &-icon {
      font-size: 50px;
      color: #222;
      display: block;
      line-height: 93px;
      margin-right: 10px;
    }
    .cross {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      font-size: 40px;
      background: #ccc;
      color: #fff;
      font-weight: border;
      position: absolute;
      line-height: 45px;
      text-align: center;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .cancel {
    padding: 0 40px;
    font-size: 45px;
  }
}
</style>
