<template>
  <div class="page-wrap">
    <div class="page" id="wallet">
      <app-header title="票夹" hasBack></app-header>
      <app-scroll class="content" v-if="isLogin">
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
      <app-scroll class="content" v-if="!isLogin">
        <div class="none-login">
          <van-swipe :autoplay="1000" indicator-color="#ff1268">
            <van-swipe-item>
              <div class="top">
                <img src="../../../assets/bigPerson.jpg" />
              </div>
              <div class="bottom">
                <h6>场馆内外服务</h6>
                <p>场馆地图，交通停车和周边服务全知道(*^▽^*)</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="top">
                <img src="../../../assets/two.jpg" />
              </div>
              <div class="bottom">
                <h6>演出实时动态</h6>
                <p>取票、检票、开演信息及时掌握(*^▽^*)</p>
              </div>
            </van-swipe-item>
          </van-swipe>
          <p class="yu-loginBtn" @click="toLoginInAction">
            <span>登录</span>
          </p>
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
import { mapGetters, mapState } from "vuex";
import { Swipe, SwipeItem } from "vant";
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
    [Ticket.name]: Ticket,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      good: {}
    };
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin
    }),
    ...mapGetters({
      finishedOrderList: "all/finishedOrderList"
    })
  },
  methods: {
    // 跳转到登录页面
    toLoginInAction() {
      this.$router.push('/login');
    }
  },
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
<style lang="scss">
$mainColor: #ff1268;
$padding: 40px;

// 用户没有登录
.none-login {
  width: 80%;
  height: 1200px;
  margin: 200px auto;
  text-align: center;
  line-height: 800px;
  border-radius: 30px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  // 轮播图
  .van-swipe {
    width: 100%;
    height: 80%;
    border-radius: 20px 20px 0 0;

    .van-swipe-item {
      width: 100%;
      height: 100%;

      .top {
        width: 100%;
        height: 600px;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
      .bottom {
        width: 100%;
        height: 300px;
        margin-top: 30px;

        h6 {
          display: block;
          height: 140px;
          line-height: 140px;
          font-size: 40px;
          color: #333;
        }
        p {
          height: 100px;
          line-height: 100px;
          font-size: 34px;
          color: #666;
        }
      }
    }

    // 小圆点的样式
    .van-swipe__indicators {
      bottom: 30px;

      .van-swipe__indicator {
      width: 16px;
      height: 16px;
    }
    }
  }

  // 登录按钮
  .yu-loginBtn {
    width: 100%;
    margin-top: 10px;

    span {
      margin: 0 auto;
      display: block;
      width: 300px;
      height: 100px;
      line-height: 100px;
      background-image: linear-gradient(to right, #ff1199, $mainColor);
      border-radius: 40px;
      color: #fff;
    }
   
   
  }


}

</style>
