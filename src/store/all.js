
const state = {
  // 正在查看的商品
  serveGood: null,
  // 选中的商品
  selectedGood: null
}

const mutations = {
  // 设置正在查看的商品
  setServeGood(state, value){
    state.serveGood = value;
  },
  // 设置选中的商品
  setSelectedGood(state, value) {
    state.selectedGood = value
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}