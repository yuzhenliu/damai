const state = {
    addressList: [{
            id: '1',
            name: '千寻',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
            id: "2",
            name: "李四",
            tel: "1310000000",
            address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
    ],
    selectIndex: 0

}

const mutations = {
    // 添加地址
    setaddressArr(state, obj) {
        state.addressList.push(obj);
    },
    //删除地址栏
    deleteaddressArr(state, idCard) {
        // let index = state.selectAddress.findIndex(item => {
        //     item.idCard == idCard
        // });
        state.addressList.splice(index, 1);
    },
    setSelectIndex(state, value) {
        state.selectIndex = value;
    }
}

const getters = {
    selectAddress(state) {
        if (state.addressList.length > 0) {
            return state.addressList[state.selectIndex];
        } else {
            return null;
        }
    }
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