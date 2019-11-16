const state = {
  // 正在查看的商品
  serveGood: null,
  // 选中的商品
  selectedGood: null,
  // 全部订单
  allOrderList: [],
  // 待付款的订单 
  toPayOrderList: [],
  // 待收货的订单 
  toReceiveOrderList: [],
}

const mutations = {
  // 设置正在查看的商品
  setServeGood(state, value) {
    state.serveGood = value;
  },
  // 设置选中的商品
  setSelectedGood(state, value) {
    state.selectedGood = value
  },
  // 设置全部订单
  setAllOrderList(state, value) {
    state.allOrderList = value
  },
  // 设置待付款的订单
  setToPayOrderList(state, value) {
    state.toPayOrderList = value
  },
  // 设置待收货的订单
  setToReceiveOrderList(state, value) {
    state.toReceiveOrderList = value
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}