import Vue from 'vue'
import Vuex from 'vuex'
import all from './all'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    city: '',
    concernList: [],
    toSeeList: [],
    // 默认第一个为选中的地址
    // selectAddress: [{
    //   id: '1',
    //   name: '千寻',
    //   tel: '13000000000',
    //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
    // }],
    selectAddress: null,
    // 实际观演人
    // observerInfo: null,
    observerInfo: {
      name: '千寻',
      idCard: '36721561252365662'
    },
  },
  mutations: {
    // 选择城市
    selectCityAction(state, val) {
      state.city = val
    },
    // 关注列表
    concernListAction(state, obj) {
      state.concernList.push(obj);
    },
    // 想看列表
    setToSeeList(state, obj) {
      state.toSeeList.push(obj);
    },
    // 设置实际观演人
    setObserverInfo(state, obj) {
      state.observerInfo = obj;
    },
    // 设置联系人
    setContactPersonInfo(state, obj) {
      state.contactPersonInfo = obj;
    },
    // 设置优惠券
    setCoupon(state, obj) {
      state.coupon = obj;
    },
  },
  actions: {},
  modules: {
    all,
  }
})