<template>
  <div class="page-wrap">
    <div class="page" id="wallet">
      <app-header title="票夹" hasBack></app-header>
      <app-scroll class="content">
        <!-- 如果没有 -->
        <div v-if="finishedOrderList.length == 0" class="none-ticket">
          <span>你的票夹空空哒</span>
        </div>
        <!-- 有完成的订单 / 票夹 -->
        <div class="has-ticket" v-else>
          <ticket-item
            class="ticketItem"
            v-for="item in this.finishedOrderList"
            :key="item.orderId"
            :orderId="item.orderId"
            :payWay="item.payWay"
            :price="item.selectedGood.ticket.price"
            :title="item.selectedGood.goodDetail.title"
          />
        </div>
      </app-scroll>
      <!-- 子页面 -->
      <transition
        enter-active-class="slideInRight"
        leave-active-class="slideOutRight"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Ticket from "./children/Ticket";
import { mapGetters } from "vuex";
import Vue from "vue";
import store from "../../../store";
export default {
  beforeRouteEnter(to, from, next) {
    // 没有登录，进去登录页面
    if (!store.state.isLogin) {
      Vue.$router.push("/login");
      next(false);
    } else {
      next();
    }
  },
  name: "wallet",
  components: {
    [Ticket.name]: Ticket
  },
  props: {},
  data() {
    return {
      good: {}
    };
  },
  computed: {
    ...mapGetters({
      finishedOrderList: "all/finishedOrderList"
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

#wallet {
  // 没有票
  .none-ticket {
    width: 80%;
    height: 800px;
    margin: 200px auto;
    background-color: #eee;
    text-align: center;
    line-height: 800px;
    border-radius: 30px;

    span {
      font-size: 50px;
      color: #333;
    }
  }

  // 有票的话
  .has-ticket {
    .ticketItem {
      width: 80%;
      margin: 40px auto;
    }
  }
}
</style>
