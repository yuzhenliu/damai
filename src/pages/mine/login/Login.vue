<template>
  <div class="page" id="d-login">
    <app-header title="登陆" :hasBack="true"></app-header>
    <app-scroll class="d-center">
      <div class="d-logoimgs">
        <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt />
      </div>
      <div>
        <div class="d-lojins border-bottom">
          <span>+86 ：</span>
          <input
            type="phone"
            placeholder="请输入手机号码"
            v-model.lazy="tel"
            class="d-iphone"
            @blur="checkPhone(tel)"
          />
        </div>
        <!-- 输入密码 -->
        <!-- <div class="d-lojins border-bottom">
          <span>密码 :</span>
          <input type="password" placeholder="请输入密码" class="d-iphone" />
        </div>-->
        <!-- 输入验证码框 -->
        <div class="authcode border-bottom">
          <div class="form-contrl">
            <input type="text" placeholder="请输入验证码" v-model="code" />
          </div>
          <div class="contrl-right" :class="{disabled: disabled}" @click="sendCodeAction">
            <span>{{btnTip}}</span>
          </div>
        </div>
      </div>

      <div class="debark">
        <van-button round type="info" class="d-debark" @click="loginAction">登陆</van-button>
      </div>

      <div>
        <p class="alert-info" @click="goRegAction">没有账号，立即注册&gt;&gt;</p>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { Toast } from "vant";
import mineService from "../../../services/mineService";
import Vue from "vue";
import { Icon, Button } from "vant";
Vue.use(Icon).use(Button);
const PASSWORD_METHOD = true;
export default {
  name: "",
  components: {
    Toast
  },
  props: {},
  data() {
    return {
      loginMethod: PASSWORD_METHOD,
      tel: "",
      code: "",
      getCode: "",
      btnTip: "发送验证码"
    };
  },
  computed: {
    disabled() {
      return this.btnTip.endsWith("s");
    }
  },
  watch: {},
  methods: {
    goRegAction() {
      this.$router.push("/regiester");
    },
    changeAction() {
      this.loginMethod = !this.loginMethod;
    },
    checkPhone(msg) {
      // 判断是否为手机号码
      console.log(msg);
      var reg = /^1[3456789]\d{9}$/;
      console.log(reg.test(msg));
      if (!reg.test(msg)) {
        Toast("手机输入错误!");
      }
    },
    async loginAction() {
      //验证码登录
      if (this.disabled) {
        // 验证码没有过期
        if (this.code == this.getCode) {
          // 下一步，登录
          let error = await mineService.login(this.tel, this.code);
          if (error) {
            Toast(error);
          } else {
            //登录了
            this.$router.push("/mine");
            this.$store.dispatch("handleLoginAction", true);
          }
        } else {
          // 验证码错误
          Toast("验证码错误!");
        }
      } else {
        //过期了
        Toast("验证码失效，请重新发送!");
      }
    },
    async sendCodeAction() {
      if (this.disabled) {
        return;
      }
      // 验证电话号码格式
      // 发送验证码
      let result = await mineService.sendCode(this.tel);
      console.log(result);
      if (result) {
        this.getCode = result;
        let num = 120;
        const timer = setInterval(() => {
          if (num > 0) {
            this.btnTip = `${num--}s`;
          } else {
            this.btnTip = `重新发送`;
            clearInterval(timer);
          }
        }, 1000);
      } else {
        Toast("发送失败,请重试!");
      }
    }
  }
};
</script>

<style lang="scss">
#d-login {
  width: 100%;
  height: 100%;
  z-index: 90;
  input{
    border:none;
    height: 80px;
    line-height: 80px;
  }
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
    width: 260px;
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
.debarks {
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