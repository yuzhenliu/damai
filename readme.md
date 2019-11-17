# yu-dev 的分支

## 成员

### 邓昌顺 deng-dev

### 刘玉珍 yu-dev

### 张慧 hui-dev

## 约束

### 类名 D Y H

### 定位 z-index

### 内容: 0 -100

### 界面: 100 - 200

### 遮罩层: 200 - 300

### 组件顺序

```
Vue.component('组件名', {
  name
  components
  directives
  filters
  template
  props
  data
  computed
  watch
  methods
  beforeRouteEnter
  beforeRouteUpdate
  beforeRouteLeave
  10个生命周期方法
  errorCaptured
});

  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}

```

master 分支上需要修改的

## 头部的样式

```
 .right-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 35px;
    font-size: 70px;
    line-height: 154px;
  }
```

$mainColor: #ff1268;
$padding: 40px;
border-radius: 60px 70px 70px 10px;

### api 
```
api

```

2019.11.15 20:59

修改 fastclick 快速点击出现 bug 事件

Unable to preventDefault inside passive event listener due to target being treated as passive.

     原因：google浏览器为了最快速的相应touch事件，做出的改变。

历史：当浏览器首先对默认的事件进行响应的时候，要检查一下是否进行了默认事件的取消。这样就在响应滑动操作之前有那么一丝丝的耽误时间。
现在：google 就决定默认取消了对这个事件的检查，默认时间就取消了。直接执行滑动操作。这样就更加的顺滑了。
但是浏览器的控制台就会进行错误提醒了。
————————————————
解决方案
1、注册处理函数时，用如下方式，明确声明为不是被动的
window.addEventListener(‘touchmove’, func, { passive: false })

2、应用 CSS 属性 touch-action: none; 这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发。
touch-action 还有很多选项，
————————————————






<template>
<lazy-component>
  <div class="goodItem" @click="getDetailInfo(good.id)">
    <div class="left">
      <img :src="(good.picUrl || good.imgUrl)" />
      <span class="flag">{{(good.flag || good.tag[0])}}</span>
    </div>
    <div class="right">
      <h3 class="title">{{good.title}}</h3>
      <p class="time text-overflow">{{(good.time || good.date)}}</p>
      <p class="address text-overflow">{{(good.address || good.location)}}</p>
      <p class="tag">
        <span>{{(good.tags || good.tag[0])}}</span>
      </p>
      <p class="priceWrap">
        <i class="price">{{(good.price || good.minPrice)}}</i>起
      </p>
    </div>
  </div>
  <!-- 未付款 -->
  <div v-if="(orderStatus == 0)" class="chooseWrap">
    <span class="payment">{{payment}}</span>
    <span class="button" @click="toPayAction">去付款</span>
  </div>
  <!-- 待收货 -->
  <div v-else-if="(orderStatus == 1)" class="chooseWrap">
    <span class="payment">{{payment}}</span>
    <span class="button" @click="toGetAction">已收货</span>
  </div>
  </lazy-component>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "app-good-item",
  props: {
    goodOrder: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      good: {},
      payWay: '',
      payment: '',
      orderStatus: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 跳转到详情页
    getDetailInfo(id) {
      this.$router.push(`/all/detail/${id}`);
    },
    // 去付款
    toPayAction() {
       Dialog.confirm({
        title: "订单支付",
        message: `${this.payWay}支付`
      })
        .then(() => {
          // 点击了付款，需要改变订单的状态
          this.$toast('你点击了付款');
        })
        .catch(() => {
          // 未付款
        this.$toast('你点击了取消付款');
        });
    },
    // 待收货
    toGetAction() {

    }
  },
  created() {
    this.good = this.goodOrder.selectedGood && this.goodOrder.selectedGood.goodDetail;
    this.payment = this.goodOrder.selectedGood && this.goodOrder.selectedGood.ticket.price;
    this.payWay = this.goodOrder.selectedGood && this.goodOrder.payWay;
    this.orderStatus = this.goodOrder.selectedGood && this.goodOrder.status;
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

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
// 已收货 / 待付款的选项
.chooseWrap {
  width: 100%;
  height: 160px;
  line-height: 160px;
  box-sizing: border-box;
  padding: 0 $padding;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .payment {
    font-size: 40px;
    color: $mainColor;
  }
  .button {
    background-color: $mainColor;
    color: #fff;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
}
</style>