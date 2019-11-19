<template>
  <div id="setadds">
    <app-header title="编辑地址" :hasBack="true"></app-header>

    <app-scroll class="d-adds">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
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
      delteAddress: state => state.address.deleteaddressArr, // 删除地址
      setAddress: state => state.address.setaddressArr // 保存地址
    })
  },

  methods: {
    onSave() {},
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
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