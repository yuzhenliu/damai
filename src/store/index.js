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
    // 选中的地址
    selectAddress: [{
      id: '1',
      name: '阿强',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
    }],
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
    }
  },
  actions: {},
  modules: {
    all,
  }
})