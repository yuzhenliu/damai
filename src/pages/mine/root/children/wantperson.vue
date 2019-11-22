<template>
  <div class="page" id="address">
    <app-header title="关注的人" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <div class="d-scrollContent">
        <div class="person" v-for="item in concernList" @click="btnActich(item)">
          <!-- 左边头像部分 -->
          <div class="d-imgs">
            <img :src="item.avarImg" alt />
          </div>
          <!-- 右边详情部分 -->
          <div class="d-detail">
            <span class="d-name">{{item.name}}</span>
            <br />
            <span>{{item.tag}}</span>
            <span>{{item.title}}</span>
            <div class="peomasage">
              <li>{{item.detail}}</li>
              <br />
              <span>¥{{item.minprice}}--{{item.maxprice}}</span>
            </div>
          </div>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    btnActich(item) {
      this.$router.replace(`/home/brand/${item.name}/detail`);
    }
  },
  computed: {
    ...mapState({
      concernList: state => state.concernList
    })
  }
};
</script>

<style  lang="scss">
#mine {
  height: 100%;
}
#address {
  z-index: 90;
  background: #fff;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
.d-scrollContent {
  position: absolute;
  top: 154px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
}
.van-tabs--line .van-tabs__wrap {
  height: 100px;
}
.van-tab span {
  line-height: 100px;
}
.person {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: left;
  margin-top: 50px;
  background: #fff;
  padding: 50px;
  box-sizing: border-box;
  .d-imgs {
    width: 30%;
    height: 100%;
    padding-right: 50px;
    img {
      width: 200px;
      margin-top: -10px;
      height: 200px;
      display: block;
      border-radius: 50%;
    }
  }
  .d-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & span:nth-of-type(1) {
      font-weight: 600;
    }
    .peomasage {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .d-name {
    font-size: 50px;
  }
}
</style>