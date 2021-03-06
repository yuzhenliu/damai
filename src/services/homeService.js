import api from '../utils/api'
import Http from '../utils/Http'

// 搜索关键字搜索品牌
export const searchBrandByKey = async (keyword) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.BRAND_BY_KEYWORD, {keyword});
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data
  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 品牌详情
export const requestBrandDetail = async (brand_id) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.BRAND_DETAIL, {brand_id});
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}


// 首页轮播图
export const requestHomeBannerList = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.HOME_BANNER_LIST);
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}


// 首页商品推荐列表
export const requestRecommendList = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.GOODS_RECOMMEND_LIST);
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 首页商品更多列表
export const requestMoreList = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.GOODS_MORE_LIST);
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
  searchBrandByKey,
  requestBrandDetail,
  requestHomeBannerList,
  requestRecommendList,
  requestMoreList  
}