import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: (localStorage.getItem('isLogin') === 'true') ? true : false
  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value;
    },
    isLogin: false,
    selectAddress: [{
      id: '1',
      name: '阿强',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
    }, ],
  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value;
    }
  },
  actions: {
    handleLoginAction(context, value) {
      // 修改数据
      context.commit('setIsLogin', value);
      // 保存登录状态
      localStorage.setItem('isLogin', value);
    },
    async checkLoginAction(context) {
      // 访问后台的登录状态过期了没
      let result = await mineService.requestCheckLogin();
      // 判断结果，设置和保存数据
      if (result === 0) {
        context.dispatch('handleLoginAction', true);
      } else {
        context.dispatch('handleLoginAction', false);
      }
    }
  },
  modules: {}
})