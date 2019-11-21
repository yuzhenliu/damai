<template>
  <div id="setadds">
    <app-header title="新增地址" :hasBack="true"></app-header>

    <app-scroll class="d-adds">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
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
      searchResult: [],
      // 地址初始值
      defaultValue: {}
    };
  },
  computed: {
    ...mapState({
      addressList: state => state.address.addressList
    })
  },

  methods: {
    onSave(result) {
      // Toast("save");
      //新增
      //获取id;
      let value = this.addressList[index];
      const detail = `${result.province} ${result.city} ${result.county} ${result.addressDetail}`;
      let res = {
        id: value.id,
        name: result.name,
        tel: result.tel,
        address: detail
      };
      console.log(1);
      console.log(res);
      // this.$router.back();
    },
    onDelete() {
      Toast("delete");
    }
  },
  created() {
    // 取得当前的地址
    let index = this.$route.query.flag;
    let value = this.addressList[index];
    console.log(value);
    // let arr = value.address.split(' ');
    console.log(arr);
    this.defaultValue = {
      id: value.id,
      name: value.name,
      province: arr[0],
      city: arr[1],
      county: arr[2],
      addressDetail: arr[3],
      postalCode: value.code,
      tel: value.tel,
      areaCode: value.areaCode
    };
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