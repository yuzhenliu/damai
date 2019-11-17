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
  <!-- 订单页面需要的内容 -->
  <div v-if="isOrderPage">
  <!-- 未付款 -->
  <div v-if="(orderStatus == 0)" class="chooseWrap">
    <span class="payment">总价: ￥{{payment}}</span>
    <span class="button" @click="toPayAction">去付款</span>
  </div>
  <!-- 待收货 -->
  <div v-else-if="(orderStatus == 1)" class="chooseWrap">
    <span class="payment">总价: ￥{{payment}}</span>
    <span class="button" @click="toGetAction">已收货</span>
  </div>
  <!-- 已经完成 -->
  <div v-else-if="(orderStatus == 3)" class="chooseWrap">
    <span class="payment">总价: ￥{{payment}}</span>
    <span class="button">已完成</span>
  </div>
  </div>
  </lazy-component>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "app-good-item",
  props: {
    isOrderPage: {
      type: Boolean,
      default: false
    },
    good: {
      type: Object,
      default: {}
    },
    orderStatus: {
      type: [String, Number],
      default: 0
    },
    payment: {
      type: [String, Number],
      default: '0',
    },
    payWay: {
      type: String,
      default: '支付宝'
    },
    orderId: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {};
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
          this.$toast('支付成功');
          console.log('点击了支付');
          this.$store.dispatch('all/getOrderIndex', {
            orderId: this.orderId,
            status: 1
          })
        })
        .catch(() => {
          // 未付款
         console.log('取消了支付');
        });
    },
    // 待收货
    toGetAction() {
       Dialog.confirm({
        title: "确认收货",
        message: `确定您已经收到货了吗?`
      })
        .then(() => {
          this.$toast('收货成功');
          console.log('点击了收货');
          this.$store.dispatch('all/getOrderIndex', {
            orderId: this.orderId,
            status: 3
          })
        })
        .catch(() => {
         console.log('取消了收货');
        });
    }
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
  margin-top: 20px;
  width: 100%;
  height: 100px;
  line-height: 100px;
  box-sizing: border-box;
  padding: 0 $padding;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    display: block;
  }

  .payment {
    font-size: 40px;
    color: $mainColor;
    font-weight: bold;
  }
  .button {
    background-color: $mainColor;
    color: #fff;
    padding: 0px 30px;
    text-align: center;
    border-radius: 10px;
    font-size: 35px;
  }
}
</style>