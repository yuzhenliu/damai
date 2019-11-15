import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    city:'',
    concernList:[]
  },
  mutations: {
    selectCityAction(state,val){
      state.city=val
    },
    concernListAction(state,obj){
      state.concernList.push(obj);
    }
  },
  actions: {},
  modules: {}
})