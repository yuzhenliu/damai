import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    city:''
  },
  mutations: {
    selectCityAction(state,val){
      state.city=val
    }
  },
  actions: {},
  modules: {}
})