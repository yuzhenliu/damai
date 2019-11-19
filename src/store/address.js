const state = {
    selectAddress: [{
        id: '1',
        name: '千寻ba',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
    }],
}

const mutations = {
    // 添加地址
    setaddressArr(state, obj) {
        state.selectAddress.push(obj);
    },
    //删除地址栏
    deleteaddressArr(state, idCard) {
        let index = state.selectAddress.findIndex(item => {
            item.idCard == idCard
        });
        state.selectAddress.splice(index, 1);
    },
}

const getters = {

}
// orderId status
const actions = {

}



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}