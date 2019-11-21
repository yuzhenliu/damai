<template>
  <div class="good-list" v-if="(orderType=='all')">
    <app-good-item :good="item.selectedGood.goodDetail" v-for="item in allOrderList" :id="id" :key="item.orderId" class="good" :orderId="item.orderId" :orderStatus="item.status" :payment="item.allPrice" :goodId="item.selectedGood.ticket.id" :seatArr="item.selectedGood.seat" :payway="item.payway" isOrderPage/>
  </div>
  <div class="good-list" v-else-if="(orderType=='toPay')">
    <app-good-item :good="item.selectedGood.goodDetail" v-for="item in toPayOrderList" :id="id" :key="item.orderId" class="good" :orderId="item.orderId" :orderStatus="item.status" :payment="item.allPrice" :goodId="item.selectedGood.ticket.id" :seatArr="item.selectedGood.seat" :payway="item.payway" isOrderPage/>
  </div>
    <div class="good-list" v-else-if="(orderType=='toGet')">
    <app-good-item :good="item.selectedGood.goodDetail" v-for="item in toReceiveOrderList" :id="id" :key="item.orderId" class="good" :orderId="item.orderId" :orderStatus="item.status" :payment="item.allPrice" :goodId="item.selectedGood.ticket.id" :seatArr="item.selectedGood.seat" :payway="item.payway" isOrderPage/>
  </div>
</template>

<script>
import GoodItem from "../../../../components/app-good-item";
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'good-list',
  components: {
    [GoodItem.name]: GoodItem,
  },
  props: {
    orderType: {
      type: String,
      default: 'all'
    },
    id: {
      type: [Number, String],
      default: 0,
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      allOrderList: state => state.all.allOrderList,
    }),

    ...mapGetters({
      toPayOrderList: 'all/toPayOrderList',
      toReceiveOrderList: 'all/toReceiveOrderList'
    }),
  },
  watch: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.good-list {
  .good {
    margin: 40px;
    background-color: #fff;
    padding: 40px 0;
  }
}

</style>