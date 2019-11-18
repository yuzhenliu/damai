<template>
  <div class="page" id="d-login">
    <app-header title="注册账号" :hasBack="true"></app-header>
    <app-scroll class="d-center">
      <div class="d-logoimgs">
        <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt />
      </div>
      <div>
        <div class="d-lojins border-bottom">
          <span>手机 :</span>
          <input
            type="phone"
            placeholder="请输入手机号码"
            class="d-iphone"
            @blur="checkPhone(tel)"
            v-model.lazy="tel"
          />
        </div>
        <!-- 输入密码 -->
        <div class="d-lojins border-bottom">
          <span>密码 :</span>
          <input type="text" placeholder="请输入密码" class="d-iphone" v-model="psd" />
        </div>
        <!-- 输入验证码框 -->
        <div class="authcode border-bottom">
          <div class="form-contrl">
            <input type="text" placeholder="请输入验证码" v-model="code" />
          </div>
          <div class="contrl-right" :class="{ disabled: disabled }" @click="sendCodeAction">
            <span>{{ tip }}</span>
          </div>
        </div>
      </div>

      <div class="debark">
        <van-button round type="info" class="d-debark" @click="regiesterAction">点击注册</van-button>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import mineService from "../../../services/mineService";

import Vue from "vue";
import { Icon, Button, Toast } from "vant";

Vue.use(Icon).use(Button);
export default {
  name: "",
  components: {
    [Toast.name]: Toast
  },
  props: {},
  data() {
    return {
      show: true,
      tip: "验证码",
      tel: "",
      getCode: null,
      psd: "",
      code: ""
    };
  },
  computed: {
    disabled() {
      return this.tip.endsWith("s");
    }
  },
  watch: {},
  methods: {
    goLoginAction() {
      this.$store.commit("isLogin", true);
      this.$router.push("/login");
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
            this.tip = `${num--}s`;
          } else {
            this.tip = `重新发送`;
            clearInterval(timer);
          }
        }, 1000);
      } else {
        Toast("发送失败,请重试!");
      }
    },
    async regiesterAction() {
      // 校验验证码
      // 是否过期
      console.log(this.disabled);

      if (this.disabled) {
        console.log(this.disabled);
        //没有过期
        if (this.getCode == this.code) {
          // 验证密码
          if (!this.psd) {
            Toast("请输入完整!");
          } else {
            //发送注册的请求
            let result = await mineService.register(this.tel, this.psd);
            console.log(result);
            if (result) {
              //注册失败
              Toast(result);
            } else {
              // 注册成功
              Toast("注册成功");
              this.goLoginAction();
            }
          }
        } else {
          Toast("验证码错误!");
        }
      } else {
        //过期了
        Toast("验证码失效，请重新发送!");
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
