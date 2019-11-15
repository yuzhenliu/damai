<template>
  <div class="page" id="d-login">
    <app-header title="登陆" :hasBack="true"></app-header>
    <app-scroll class="d-center">
      <div class="d-logoimgs">
        <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt />
      </div>
      <div class="d-lojins border-bottom">
        <span>
          +86
          <van-icon name="arrow-down" />
        </span>
        <input type="phone" placeholder="请输入手机号码" class="d-iphone" />
      </div>
      <!-- 输入密码 -->
      <div class="d-lojins border-bottom">
        <span>密码 :</span>
        <input type="number" placeholder="请输入密码" class="d-iphone" />
      </div>
      <!-- 输入验证码框 -->
      <div class="authcode border-bottom">
        <div class="form-contrl">
          <input type="number" placeholder="请输入验证码" />
        </div>
        <div class="contrl-right">
          <span>获取验证码</span>
        </div>
      </div>

      <div class="debark">
        <van-button round type="info" class="d-debark">登陆</van-button>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import mineService from "../../../services/mineService";
import Vue from "vue";
import { Icon, Button } from "vant";

Vue.use(Icon).use(Button);
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
#d-login {
  width: 100%;
  height: 100%;
  z-index: 90;
}
.d-logoimgs {
  width: 100%;
  height: 280px;
  margin-top: 300px;
  display: flex;
  justify-content: space-around;
  img {
    height: 180px;
    display: block;
    width: 400px;
  }
}
.d-lojins {
  margin: 0 72px;
  padding: 30px 0;
  display: flex;
  span {
    height: 80px;
    text-align: center;
    width: 200px;
    display: inline-block;
    font-size: 40px;
    line-height: 100px;
  }
  input {
    height: 80px;
    font-size: 40px;
    flex: 1;
    padding: 0px 20px;
    box-sizing: border-box;
  }
}
.authcode {
  margin: 0 72px;
  padding: 30px 0;
  display: flex;
  .form-contrl {
    font-size: 40px;
    flex: 1;
    input {
      padding: 0 40px;
    }
  }
  .contrl-right {
    width: 200px;
    height: 80px;
    line-height: 80px;
  }
}
.debark {
  margin: 0 72px;
  margin-top: 80px;
  height: 140px;
  .d-debark {
    width: 100%;
    height: 100%;
    background: red;
    font-size: 50px;
  }
}
</style>