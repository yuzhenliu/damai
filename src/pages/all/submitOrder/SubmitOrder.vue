<template>
  <div class="page-wrap">
    <div class="page subpage" id="detail">
      <app-header title="确认订单" hasBack></app-header>
      <app-scroll class="scrollContent" ref="orderScroll">
        <div class="wrap">
          <!-- 票价信息 -->
          <div class="ticketInfoWrap" v-if="selectedGood">
            <!-- 地址 /票档等 -->
            <div class="addressInfo border-bottom">
              <p class="title">{{selectedGood.goodDetail.location}}</p>
              <p class="info">{{selectedGood.goodDetail.city}}</p>
            </div>
            <div class="ticketInfo border-bottom">
              <p class="date">{{selectedGood.goodDetail.date}}</p>
              <p class="price">￥{{selectedGood.ticket.price}}票档 x 1张</p>
              <p class="seat">座位号： {{selectedGood.seat}}</p>
            </div>
            <div>
              <p class="warmTip border-bottom">
                <van-icon name="warning-o" color="#fff" />
                <span>不支持退</span>
                <van-icon name="passed" color="#fff" />
                <span>可开发票</span>
                <van-icon name="arrow" class="more" />
              </p>
            </div>
          </div>
          <!-- 选择 -->
          <div class="chooseWrap">
            <!-- 实际观演人 / 配送方式(电子票/ 地址) / 联系人 / 支付方式 -->

            <div class="observer">
              <span class="tit">实际观演人</span>
              <span class="tip">仅需选择1位: 入场需携带对应证件</span>
              <span class="btn" @click="addAction">新增</span>
            </div>
            <div v-for="item in observerArr" :key="item.idCard" class="observerInfo">
              <span class="name">{{item.name}}</span>
              <span class="idCard">身份证{{item.idCard}}</span>
              <input type="checkbox" class="check" ref="check" />
            </div>

            <div v-if="selectAddress" class="postAddr">
              <!-- 有配送地址 -->
              <p class="tit">配送方式</p>
              <p class="way">快递</p>
              <van-cell
                :title="(selectAddress[0].name+ '  ' + selectAddress[0].tel)"
                :label="selectAddress[0].address"
                is-link
              />
              <van-cell title="运费" label="￥18.00" />
            </div>
            <div v-else class="postAddr-o">
              <!-- 无配送地址 -->
              <p class="tit">配送方式</p>
              <p class="way">快递</p>
              <van-cell title="新增收货地址" is-link />
            </div>

            <!-- 联系人 -->
            <div class="contactWrap">
              <p class="tit">联系人</p>
              <p class="name">
                <input type="text" placeholder="请填写联系人姓名" ref="name" />
              </p>
              <p class="tel">
                <input type="text" placeholder="请填写联系人电话" ref="tel" />
              </p>
            </div>

            <!-- 支付方式 -->
            <div class="payWays">
              <p>
                <span class="tit">支付宝</span>
                <van-icon name="passed" :class="{active: isZHIFUBAO}" @click="changePayWay" />
              </p>
              <p>
                <span class="tit">微信</span>
                <van-icon name="passed" :class="{active: !isZHIFUBAO}" @click="changePayWay" />
              </p>
            </div>
          </div>
        </div>
      </app-scroll>
      <!-- 底部栏 -->
      <div class="tabbar border-top" v-if="selectedGood">
        <p>
          <span class="price">￥{{selectedGood.ticket.price}}</span>
        </p>
        <div class="define" @click="submitAction">
          <span>提交订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Cell, CellGroup, Dialog } from "vant";
export default {
  name: "submit-order",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props: {},
  data() {
    return {
      isZHIFUBAO: true,
    };
  },
  computed: {
    ...mapState({
      selectedGood: state => state.all.selectedGood, // 选中的商品信息
      selectAddress: state => state.selectAddress, // 选中的地址
      observerArr: state => state.observerArr // 实际观演人
    })
  },
  methods: {
    // 新增观演人
    addAction() {
      this.$router.push("/mine/watch");
    },
    // 改变支付方式
    changePayWay() {
      this.isZHIFUBAO = !this.isZHIFUBAO;
    },
    // 提交订单
    submitAction() {
      // 实际观演人 / 配送方式(电子票/ 地址) / 联系人 / 支付方式
      if (!this.selectedGood) {
        this.$toast("您还没有选中商品");
        return;
      }
      if(this.observerArr.length == 0) {
        this.$toast('观演人信息不能为空');
        return;
      }
      let selectedObserveArr = [];
      this.$refs.check.forEach((item, index) => {
        if(item.checked) {
          selectedObserveArr.push(this.observerArr[index]);
        }
      });
      if (selectedObserveArr.length == 0) {
        this.$toast("请选择观演人信息");
        return;
      }
      if (!this.selectAddress) {
        this.$toast("配送地址不能为空");
        return;
      }
      if (!this.$refs.name.value) {
        this.$toast("联系人姓名不能为空");
        return;
      }
      if (!this.$refs.tel.value) {
        this.$toast("联系人电话不能为空");
        return;
      }
      let payWay = this.isZHIFUBAO ? "支付宝" : "微信";
      // 拿到商品的数据
      let goodOrder = {
        selectedGood: this.selectedGood,
        selectAddress: this.selectAddress,
        selectedObserveArr:selectedObserveArr,
        contactInfo: {
          name: this.$refs.name.value,
          tel: this.$refs.tel.value
        },
        payWay
      };
      // 弹出确认框，是否付款，如果点击确认显示付款成功，给商品添加状态 1 / 点击取消，给商品添加状态 0，则跳转到订单页面
      Dialog.confirm({
        title: "订单支付",
        message: `${payWay}支付`
      })
        .then(() => {
          this.$toast('支付成功');
          goodOrder.status = 1;
          goodOrder.orderId = new Date().getTime();
          this.$store.commit('all/setAllOrderList', goodOrder);
          this.$router.replace('/mine/indent');
          console.log(goodOrder.selectedObserveArr);
        })
        .catch(() => {
          // 未付款
          goodOrder.status = 0;
          goodOrder.orderId = new Date().getTime();
          this.$store.commit('all/setAllOrderList', goodOrder);
          this.$router.replace('/mine/indent');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

.scrollContent {
  position: absolute;
  top: 154px;
  left: 0;
  bottom: 172px;
  width: 100%;
  overflow: auto;

  .wrap {
    width: 100%;
    background: #eee;

    // 票价信息
    .ticketInfoWrap {
      width: 100%;
      padding: 0 $padding;
      background-color: $mainColor;
      line-height: 64px;
      box-sizing: border-box;

      .addressInfo {
        padding: $padding 0;
        box-sizing: border-box;
        overflow: hidden;

        .title {
          font-size: 50px;
          color: #fff;
        }
        .info {
          font-size: 33px;
          color: #fff;
        }
      }

      .ticketInfo {
        padding: $padding 0;
        box-sizing: border-box;
        overflow: hidden;

        .date {
          font-size: 42px;
          color: #fff;
        }
        .price {
          font-size: 40px;
          color: #fff;
        }
        .seat {
          font-size: 33px;
          color: #fff;
        }
      }
      .warmTip {
        padding: $padding 0;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;

        .van-icon {
          font-size: 33px;
          margin: 6px;
        }
        span {
          font-size: 33px;
          color: #fff;
          margin: 6px;
        }
        .more {
          font-size: 33px;
          margin: 6px;
          position: absolute;
          right: 0;
          color: #fff;
        }
      }
    }

    // 选择容器
    .chooseWrap {
      width: 100%;
      background-color: #f5f5f5;
      box-sizing: border-box;

      //观演人
      .observer {
        border-radius: 40px 40px 0 0;
        background-color: #fff;
        padding: $padding;
        box-sizing: border-box;
        font-size: 34px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .tit {
          color: #333;
        }
        .tip {
          color: $mainColor;
          margin-left: 10px;
        }
        .btn {
          display: inline-block;
          margin-left: 40px;
          color: #fff;
          background-color: $mainColor;
          width: 162px;
          height: 74px;
          text-align: center;
          line-height: 74px;
          border-radius: 40px;
        }
      }
      // 观演人信息
      .observerInfo {
        background-color: #fff;
        padding: $padding;
        box-sizing: border-box;
        font-size: 34px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #333;

        .name {
        }
        .idCard {
        }
        .check {
          border: 1px solid #ccc;
        }
      }

      // 有配送地址
      .postAddr {
        padding: $padding;
        box-sizing: border-box;
        background-color: #fff;
        .tit {
          padding: 20px 0;
          font-size: 30px;
          color: #555;
        }
        .way {
          padding: 20px 0;
          font-size: 44px;
          color: #333;
        }
        .van-cell {
          line-height: 100px;
          vertical-align: middle;

          .van-icon {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            color: #222;
          }
        }
      }
      // 无配送地址
      .postAddr-o {
        padding: $padding;
        box-sizing: border-box;
        background-color: #fff;
        .tit {
          padding: 20px 0;
          font-size: 30px;
          color: #555;
        }
        .way {
          padding: 20px 0;
          font-size: 44px;
          color: #333;
        }
        .van-cell {
          line-height: 100px;
          color: $mainColor;
          .van-icon {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            color: #222;
          }
        }
      }

      // 联系人
      .contactWrap {
        padding: $padding;
        box-sizing: border-box;
        margin-top: 28px;
        background-color: #fff;
        .tit {
          padding: 20px 0;
          font-size: 30px;
          color: #555;
        }
        .name,
        .tel {
          height: 100px;
          line-height: 100px;

          input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            color: #333;
            font-size: 44px;
          }
        }
      }

      // 支付方式
      .payWays {
        width: 100%;
        padding: $padding;
        box-sizing: border-box;
        margin-top: 28px;
        background-color: #fff;

        p {
          display: flex;
          justify-content: space-between;
          .tit {
            padding: 20px 0;
            font-size: 30px;
            color: #555;
          }
          .van-icon {
            font-size: 50px;
            color: #eee;
          }
          .active {
            color: $mainColor;
          }
        }
      }
    }
  }
}

// tabbar
.tabbar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 172px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 $padding;

  p {
    flex: 7;
    font-size: 33px;
    color: #999;
    .price {
      color: $mainColor;
      font-size: 50px;
    }
  }
  .define {
    height: 100%;
    flex: 4;
    box-sizing: border-box;
    padding: 22px 30px;

    span {
      display: block;
      width: 100%;
      height: 100%;
      background-color: $mainColor;
      color: #fff;
      text-align: center;
      font-size: 38px;
      line-height: 122px;
    }
  }
}

</style>
<style lang="scss">
.van-dialog {
  width: 80%;
  height: 18%;
}

.van-dialog__header {
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  color: #333;
}
.van-dialog__content {
  margin-top: 40px;
  .van-dialog__message {
  line-height: 60px;
  }

  .van-hairline--top {
    font-size: 60px;
  }
}
</style>