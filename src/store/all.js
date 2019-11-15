
const state = {
  // 正在查看的商品
  serveGood: null
}

const mutations = {
  // 设置正在查看的商品
  setServeGood(state, value){
    state.serveGood = value;
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}