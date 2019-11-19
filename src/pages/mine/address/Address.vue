<template>
  <div class="page" id="address">
    <app-header title="我的地址" :hasBack="true"></app-header>

    <app-scroll class="dd_center">
      <router-view></router-view>

      <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
    </app-scroll>
  </div>
</template>

<script>
// import mineService, { login } from "../../../services/mineService";
import Vue from "vue";
import { AddressList, Toast } from "vant";

Vue.use(AddressList).use(Toast);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },

  methods: {
    onAdd() {
      // Toast("新增地址");
      this.$router.push("/mine/address/setaddress");
    },

    onEdit(item, index) {
      // Toast("编辑地址:" + index);
      this.$router.push("/mine/address/addaddress" + "?" + index);
    }
  }
};
</script>

<style  lang="scss">
#address {
  z-index: 90;
  background: #fff;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  .dd_center {
    position: absolute;
    top: 154px;
    bottom: 0px;
    width: 100%;
  }
  .scoll-wrap {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  .van-cell {
    height: 100%;
    justify-content: space-between;
  }
  .van-address-item__value {
    border-bottom: 1px solid #ccc;
  }
  .van-address-list {
    width: 100%;
    height: 100%;
    .van-radio-group {
      width: 100%;
    }
    .van-radio {
      height: 100%;
    }
    .van-radio__label {
      height: 100%;
      width: 85%;
      padding-left: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .van-address-item__name {
      line-height: 100px;
      height: 100px;
    }
    .van-address-item__address {
      height: 140px;
      line-height: 140px;
    }
    .van-address-item__edit {
      padding: 80px 40px;
    }
  }
  .van-button {
    height: 150px;
    font-size: 40px;
  }
  .van-address-list__add {
    z-index: 100;
  }
}
</style>




