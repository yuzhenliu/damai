<template>
  <div class="page" id="address">
    <app-header title="想看的演出" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <div class="d-scrollContent">
        <van-tabs v-model="active">
          <van-tab title="演出">
            <div class="wantwatch" v-for="item in wantList">
              <div class="dl-img">
                <img :src="item.picUrl" alt />
              </div>
              <div class="dl-right">
                <span>{{item.title}}</span>
                <br />
                <span v-for="m in item.flag"></span>
                <span>{{item.address}}</span>
                <br />
                <span>{{item.time}}</span>
                <br />
                <span>¥：{{item.price}}</span>
              </div>
            </div>
          </van-tab>
          <van-tab title="合集"></van-tab>
        </van-tabs>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import { mapState } from "vuex";
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapState({
      wantList: state => state.toSeeList
    })
  },
  methods: {}
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
.wantwatch {
  margin-top: 20px;
  background: #fff;
  width: 100%;
  height: 300px;
  display: flex;
  padding: 20px 10px;
  .dl-img {
    width: 30%;
    height: 100%;
    padding-left: 50px;
    padding-top: 10px;
    box-sizing: border-box;
    img {
      width: 240px;
      height: 280px;
    }
  }
  .dl-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & span:nth-of-type(1) {
      font-size: 60px;
    }
    & span:nth-of-type(6) {
      font-size: 40px;
      color: red;
      font-weight: 600;
    }
  }
}
</style>