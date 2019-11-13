import api from '../utils/api'
import Http from '../utils/Http'

// 请求城市列表
export const requestCityList = async () => {
  const {
    data: result
  } = await Http.get(api.CITYLIST);
  // 判断请求的结果
  if (result.code === 0) {
    // 成功

    return result.data.citylist.data.areas

  } else {
    // 失败了
    throw new Error(result.message);
  }

}

// 点赞
export const support = async (comment_id, flag) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.COMMENT_SUPPORT, {comment_id, flag});
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}


// 评价详情
export const requestCommentDetail = async (comment_id) => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.COMMENT_DETAIL, {comment_id});
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}

// 提交评价
export const submitComment = async (comment_id, user_id) => {
  // 发送请求
  const {
    data: result
  } = await Http.post(api.SUBMIT_COMMENT, {comment_id, user_id});
  // 判断请求的结果
  if (result.code === 0) {
    // 成功
    return result.data

  } else {
    // 失败了
    throw new Error(result.message);
  }
}


// 首页 / 全部 分类列表
export const requestClassify = async () => {
  // 发送请求
  const {
    data: result
  } = await Http.get(api.HOME_CLASSIFY);
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
  requestCityList,
  support,
  requestCommentDetail,
  submitComment,
  requestClassify
}