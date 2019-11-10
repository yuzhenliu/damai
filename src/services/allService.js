import api from '../utils/api'
import Http from '../utils/Http'

// 根据分类请求商品列表
export const requestGoodsByClassifyId = async (classify_id) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.BY_CLASSIFY_ID, {
    classify_id
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


// 商品详情页
export const requestGoodsDetail = async (id) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.GOODS_DETAIL, {
    id
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


// 想看
export const toSee = async (id, flag) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.GOODS_DETAIL_TOSEE, {
    id,
    flag
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


// 提交订单
export const submitOrder = async (id, userOption, addressid, contactInfo) => {
  // 发送请求
  const {
    data: result
  } = await Http.post(api.GOODS_ORDER_SUBMIT, {
    id,
    userOption,
    addressid,
    contactInfo
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


export default {
  requestGoodsByClassifyId,
  requestGoodsDetail,
  toSee,
  submitOrder
}