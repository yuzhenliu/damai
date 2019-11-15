import Vue from 'vue'
import Vuex from 'vuex'
import all from './all'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    city:'',
    concernList:[],
    toSeeList: [],
  },
  mutations: {
    // 选择城市
    selectCityAction(state,val){
      state.city=val
    },
    // 关注列表
    concernListAction(state,obj){
      state.concernList.push(obj);
    },
    // 想看列表
    setToSeeList(state, obj) {
      state.toSeeList.push(obj);
    },
  },
  actions: {},
  modules: {
    all,
  }
})