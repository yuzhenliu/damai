<template>
  <div class="page" id="mine">
    <app-header title="个人主页"></app-header>
    <!-- 页面过度 -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <router-view></router-view>
    </transition>

    <app-scroll class="d-center">
      <div class="d-iphoto">
        <!-- 头像部分 -->
        <div class="d-myphoto">
          <div class="d-install">
            <div class="install">
              <van-icon name="setting-o" />
            </div>
            <div class="massage">
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
      <!-- 个人信息列表部分 -->
      <div></div>
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
  methods: {}
};
</script>

<style lang='scss'>
.d-center {
  position: absolute;
  width: 100%;
  top: 154px;
  bottom: 0px;
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
}
</style>