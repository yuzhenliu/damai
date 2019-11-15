<template>
  <div class="page" id="mine">
    <!-- 页面过度 -->
    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>

    <app-header title="个人主页"></app-header>

    <app-scroll class="d-center">
      <div class="d-iphoto">
        <!-- 头像部分 -->
        <div class="d-myphoto">
          <div class="d-install">
            <div class="install" @click="installAction">
              <van-icon name="setting-o" />
            </div>
            <div class="massage" @click="massageAction">
              <van-icon name="more-o" />
            </div>
          </div>

          <!-- 头像下边部分 -->
          <div class="d-headportrait">
            <div class="headportrait">
              <img src="../../../assets/mine/default.png" alt />
            </div>
            <div class="information">
              <h2>麦子1dSDR</h2>
            </div>
          </div>
        </div>
        <!-- 想看的演出 -->
        <div class="d-tab">
          <div class="tab tab1">
            <span>0</span>

            <span>想看的演出</span>
          </div>
          <div class="tab tab2">
            <span>0</span>
            <span>关注的人</span>
          </div>
          <div class="tab tab3">
            <span>0</span>

            <span>待评价演出</span>
          </div>
          <div class="tab tab4">
            <span>0</span>
            <span>优惠券</span>
          </div>
        </div>
      </div>

      <div class="d_banner">
        <img src="../../../assets/mine/vipCard.png" alt />
      </div>
      <!-- 个人信息列表部分 -->
      <div class="d-adress">
        <div class="indent border-bottom" @click="btnAction">
          <div class="d-indent">我的订单</div>
          <div class="indentIcont">
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 常用观演人 -->
        <div class="watch border-bottom" @click="peAction">
          <div class="d-watch">常用观演人</div>
          <div class="indentIcont">
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 我的地址 -->
        <div class="d-address border-bottom" @click="adAction">
          <div class="dd-address">收货地址</div>
          <div class="indentIcont">
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 在线客服 -->
        <div class="d-service border-bottom" @click="seAction">
          <div>在线客服</div>
          <div class="indentIcont">
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 电子钱包 -->
        <div class="d-wallet border-bottom" @click="waAction">
          <div>电子钱包</div>
          <div class="indentIcont">
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 公益三小时 -->
        <div class="d-time border-bottom" @click="timeAction">
          <div>公益三小时</div>
          <div class="indentIcont">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Button } from "vant";
import mineService from "../../../services/mineService";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    installAction() {
      this.$router.push("/mine/install");
    },
    massageAction() {
      this.$router.push("/mine/massage");
    },
    btnAction() {
      this.$router.push("/mine/indent");
    },
    adAction() {
      this.$router.push("/mine/address");
    },
    seAction() {
      this.$router.push("/mine/service");
    },
    waAction() {
      this.$router.push("/mine/purse");
    },
    timeAction() {
      this.$router.push("/mine/times");
    },
    peAction() {
      this.$router.push("/mine/watch");
    }
  },
  created() {}
};
</script>

<style lang="scss">
#mine {
  height: 100%；;
}
.d-center {
  position: absolute;
  width: 100%;
  top: 154px;
  bottom: 0px;
  overflow: hidden;
  .d-iphoto {
    width: 100%;
    height: 660px;
    overflow: hidden;
    .d-myphoto {
      width: 100%;
      height: 420px;
      .d-install {
        height: 144px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .install {
          width: 60px;
          height: 144px;
          line-height: 144px;
          margin-right: 50px;
          .van-icon {
            font-size: 56px;
          }
        }
        .massage {
          width: 60px;
          height: 144px;
          line-height: 144px;
          margin-right: 50px;
          .van-icon {
            font-size: 56px;
          }
        }
      }
      .d-headportrait {
        height: 276px;
        margin: 0 50px;
        display: flex;
        justify-content: space-between;
        .headportrait {
          width: 180px;
          height: 180px;
          img {
            margin-top: 40px;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .information {
          flex: 1;
          line-height: 276px;
          padding: 0 80px;
          font-size: 70px;
          font-weight: 600;
        }
      }
    }

    .d-tab {
      height: 236px;
      padding: 0 80px;
      display: flex;
      justify-content: space-between;
      .tab {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span:nth-of-type(1) {
          font-size: 60px;
        }
        span:nth-of-type(2) {
          font-size: 40px;
        }
      }
    }
  }
  .d_banner {
    margin: 100px 0;
    padding: 0 50px;
    box-sizing: border-box;
    width: 100%;
    height: 260px;
    border-radius: 110px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .indent {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    font-size: 60px;
    line-height: 200px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
  .watch {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    font-size: 60px;
    line-height: 200px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
  .d-address {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    font-size: 60px;
    line-height: 200px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
  .d-service {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    font-size: 60px;
    line-height: 200px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
  .d-wallet {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    font-size: 60px;
    line-height: 200px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
  .d-time {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    font-size: 60px;
    line-height: 200px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
