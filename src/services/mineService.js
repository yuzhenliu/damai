import api from '../utils/api'
import Http from '../utils/Https'
import {
  log
} from 'util';

// 发送验证码
export const sendCode = async (tel) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.SEND_CODE_API, {
    tel
  });

  console.log(result);

  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 注册
export const register = async (tel, password) => {
  // 发送请求
  const {
    data: result
  } = await Http.post(api.REGIESTER_API, {
    tel,
    password
  });
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// export const requestRegiester = async (tel, password) => {
//   let result = await Http.post(api.REGIESTER_API, {
//     tel,
//     password
//   });
//   if (result.data.code === 0) {
//     return null;
//   } else {
//     return result.data.message;
//   }
// }

// 登录
export const login = async (tel, type, value) => {
  // 发送请求
  const {
    data: result
  } = await Http.post(api.LOGIN_API, {
    tel,
    value
  });
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 检查登录是否过期
export const checkLogin = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.CHECK_LOGIN);
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 登录退出
export const loginOut = async () => {
  // // 发送请求
  // const {
  //   data: result
  // } = await Http.get(api.LOGOUT_API);
  // // 判断请求的结果
  // if (result.code === 0) {
  //   // 成功
  //   return result.data

  // } else {
  //   // 失败了
  //   throw new Error(result.message);
  // }
  let result = await Http.get(api.LOGOUT_API);
  return result.data.code;
}

// 新增地址
export const addAddress = async (name, tel, address, code) => {
  // 发送请求
  const {
    data: result
  } = await Http.post(api.ADD_ADDRESS_API, {
    name,
    tel,
    address,
    code
  });
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 获得地址列表接口
export const requestAddressList = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.ADDRESS_LIST_API);
  // 判断请求的结果
  if (result.code === 0) {
    // 成功s
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 订单列表
export const requestGoodsList = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.ORDER_LIST_API);
  // 判断请求的结果
  if (result.code === 0) {
    // 成功s
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}


// 修改订单
export const modifyOrder = async (status) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.ORDER_MODIFY, {
    status
  });
  // 判断请求的结果
  if (result.code === 0) {
    // 成功s
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}



export default {
  sendCode,
  register,
  login,
  checkLogin,
  loginOut,
  addAddress,
  requestAddressList,
  requestGoodsList,
  modifyOrder
}