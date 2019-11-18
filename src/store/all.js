const state = {
  // 正在查看的商品
  serveGood: null,
  // 选中的商品
  selectedGood: null,
  // 全部订单 1 为待收货  0 为待付款
  allOrderList: [],
  // 待付款的订单 
  // toPayOrderList: [],
  // 待收货的订单 
  // toReceiveOrderList: [],
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
  setAllOrderList(state, obj) {
    state.allOrderList.push(obj);
  },
  // 设置全部订单的状态 index, status
  setOrderStatus(state, obj) {
    state.allOrderList[obj.index].status = obj.status;
  }
}

const getters = {
   // 待付款的订单 
  toPayOrderList(state) {
    return state.allOrderList.filter(list => list.status == 0);
  },
  // 待收货的订单
  toReceiveOrderList(state) {
    return state.allOrderList.filter(list => list.status == 1);
  },
  // 已完成的订单
  finishedOrderList(state) {
    return state.allOrderList.filter(list => list.status == 3);
  }
}
// orderId status
const actions = {
  getOrderIndex(context, obj) {
    let index = context.state.allOrderList.findIndex(item => item.orderId == obj.orderId);
    context.commit('setOrderStatus', {
      index: index,
      status: obj.status
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}