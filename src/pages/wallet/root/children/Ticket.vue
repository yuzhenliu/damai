<template>
  <div class="ticket">
    <!-- 订单号 / 标题 / 价格 / 支付方式 -->
    <h6 class="title">{{title}}</h6>
    <p class="orderIdWrap">订单号: {{orderId}}</p>
    <p class="payWrap"><span>{{payWay}}支付</span><span>￥{{price}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'ticket-item',
  components: {},
  props: {
    orderId: {
     type: [Number, String],
     default: '',
    },
     payWay: {
     type: String,
     default: '支付宝',
    },
    price: {
      type: [Number, String],
      default: '',
    },
    title: {
     type: String,
     default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

.ticket {
  padding: $padding;
  background-color:$mainColor;
  color: #fff; 
  border-radius: 30px;

  .title {
    font-size: 50px;
    line-height: 60px;
  }
  .orderIdWrap {
    margin-top: 30px;
    font-size: 40px;
  }
  .payWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 34px;
  }
}
</style>