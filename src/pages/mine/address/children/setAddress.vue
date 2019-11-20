<template>
  <div id="setadds">
    <app-header title="编辑地址" :hasBack="true"></app-header>

    <app-scroll class="d-adds">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </app-scroll>
  </div>
</template>

<script>
import { AddressEdit, Toast } from "vant";
import areaList from "../../../../utils/city";
import { mapState } from "vuex";
export default {
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast
  },
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  computed: {
    ...mapState({
      addressList: state => state.address.addressList //地址列表,
    })
  },

  methods: {
    onSave(result) {
      // Toast("save");
      //新增
      // //获取id;
      let value = this.addressList.length;
      const detail = `${result.province} ${result.city} ${result.county} ${result.addressDetail}`;
      let res = {
        id: value + 1,
        name: result.name,
        tel: result.tel,
        address: detail
      };
      this.$store.commit("address/setaddressArr", res);
      this.$router.back();
    },
    onDelete() {
      Toast("delete");
    }
  }
};
</script>

<style lang='scss'>
.d-adds {
  position: absolute;
  background: #fff;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 110;
  #address .van-cell {
    height: 160px;
  }
  .van-field__label {
    height: 70px;
    line-height: 70px;
  }
  .van-field__body {
    height: 100%;
    line-height: 70px;
  }
  element.style {
    height: 70px;
  }
}
.van-dialog {
  height: 300px;
  .van-dialog__header {
    height: 100px;
  }
  .van-dialog__footer--buttons {
    height: 200px;
    .van-button--large {
      line-height: 200px;
    }
  }
}
</style>