<template>
  <div class="page" id="address">
    <app-header title="我的地址" :hasBack="true"></app-header>

    <app-scroll class="dd_center">
      <router-view></router-view>
      <van-address-list v-model="chosenAddressId" :list="addressList" @add="onAdd" @edit="onEdit" />
    </app-scroll>
  </div>
</template>

<script>
// import mineService, { login } from "../../../services/mineService";
import Vue from "vue";
import { AddressList, Toast } from "vant";
import { mapState } from "vuex";
Vue.use(AddressList).use(Toast);
export default {
  data() {
    return {
      chosenAddressId: "1"
    };
  },
  computed: {
    ...mapState({
      addressList: state => state.address.addressList
    })
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
  // position: relative;
  // left: 0;
  // top: 0;
  // bottom: 0;
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




