const state = {
  // 正在查看的商品
  serveGood: null,
  // 选中的商品
  selectedGood: null,
  // 全部订单 1 为待收货  0 为待付款
  allOrderList: [],

  // 已经选中的座位  保存位置
  selectedPosition: {
    0: [10, 16, 27],
  },
  // 暂时被选中的座位
  tmpSelectedPosition: {
    0: [3]
  },
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
  },
  // 添加已经选中的座位 id arr
  setSelectedPosition(state, obj) {
    if(state.selectedPosition[obj.id]) { // 如果 key 存在的话
      state.selectedPosition[obj.id] = state.selectedPosition[obj.id].concat(obj.arr);
    }else {
      state.selectedPosition[obj.id] = obj.arr;
    }
    
  },
  // 添加临时选中的位置 id arr
  addTmpSelectedPosition(state, obj) {
    if(state.tmpSelectedPosition[obj.id]) { // 如果 key 存在的话
      state.tmpSelectedPosition[obj.id] = state.tmpSelectedPosition[obj.id].concat(obj.arr);
    }else {
      state.tmpSelectedPosition[obj.id] = obj.arr;
    }
  },
  // 删除临时选中的位置 id arr
  deleteTmpSelectedPosition(state, obj) {
    if(state.tmpSelectedPosition[obj.id]) { // 如果 key 存在的话
      state.tmpSelectedPosition[obj.id] = state.tmpSelectedPosition[obj.id].filter((item) => !obj.arr.some((items) => item === items));
      console.log(state.tmpSelectedPosition[obj.id]);
    }else {
      return;
    }
  },
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