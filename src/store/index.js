import Vue from 'vue'
import Vuex from 'vuex'
import all from './all'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 检查是否登录
    isLogin: (localStorage.getItem('isLogin') === 'true') ? true : false,
     // 城市
     city: '',
     // 关注列表
     concernList: [],
     // 想看的列表
     toSeeList: [],
     // 默认第一个为选中的地址
     selectAddress: [{
       id: '1',
       name: '千寻',
       tel: '13000000000',
       address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
     }],
     // 实际观演人
     observerArr: [
       {
         name: '千寻',
         idCard: '36721561252365662'
       },
       {
         name: '小白',
         idCard: '36721561252365656'
       },
     ],
  },
  mutations: {
    // 设置是否登录
    setIsLogin(state, value) {
      state.isLogin = value;
    },
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
    // 添加实际观演人
    setobserverArr(state, obj) {
      state.observerArr.push(obj);
    },
    // 删除观演人
    deleteobserverArr(state, idCard) {
      let index = state.observerArr.findIndex(item => {
        item.idCard == idCard
      });
      state.observerArr.splice(index, 1);
    },
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
  modules: {
    all,
  }
})