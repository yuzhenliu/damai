// 管理api
// export const HOST = 'http://localhost:9000';

// ### 首页

/*
###### 请求城市列表
api:/api/citylist
method： GET
参数：无
返回值： message   code   data
*/
const CITYLIST = "/api/citylist";


/*
###### 搜索页面热搜列表
api:/api/search/hotList
method： GET
参数：无
返回值： message   code   data
*/
const SEARCH_HOTLIST = "/api/search/hotList";

/*
##### 搜索关键字搜索品牌
api: /api/brand/by_keyword
methods: GET
参数： keyword
*/
const BRAND_BY_KEYWORD = "/api/brand/by_keyword";

/*
##### 品牌详情
api: /api/brand/brand_detail
methods: GET
参数： brand_id
*/
const BRAND_DETAIL = "/api/brand/brand_detail";

/*
##### 点赞
api: /api/comment/support
methods: GET
参数： comment_id, flag
*/
const COMMENT_SUPPORT = "/api/comment/support";

/*
##### 评价详情
api: /api/brand/comment_detail
methods: GET
参数： comment_id,
*/
const COMMENT_DETAIL = "/api/brand/comment_detail";

/*
##### 提交评价
api: /api/brand/submit_comment
methods: POST
参数： comment_id, user_id,
*/
const SUBMIT_COMMENT = "/api/brand/comment_detail";

/*
##### 首页轮播图
api: /api/home/banner_list
methods: GET
参数： 无
*/
const HOME_BANNER_LIST = "/api/home/banner_list";

/*
##### 首页 / 全部 分类列表
api： /api/home/classify
method: GET
参数： 无
*/
const HOME_CLASSIFY = "/api/home/classify";

/*
##### 首页商品推荐列表
api： /api/goods/recommend_list
method: GET
参数： 无
*/
const GOODS_RECOMMEND_LIST = "/api/goods/recommend_list";

/*
##### 首页商品更多列表
api： /api/goods/more_list
method: GET
参数： id
*/
const GOODS_MORE_LIST = "/api/goods/more_list";

// 全部

/*
##### 根据分类请求商品列表
api： /api/goods/goods_list/by_classify_id
method: GET
参数： classify_id
*/
const BY_CLASSIFY_ID = "/api/goods/goods_list/by_classify_id";

/*
##### 商品详情页
api： /api/goods/goods_detail
method: GET
参数： id

*/
const GOODS_DETAIL = "/api/goods/goods_detail";

/*
##### 想看
api: /api/goods/goods_detail/toSee
methods: GET
参数： id, flag
*/
const GOODS_DETAIL_TOSEE = "/api/goods/goods_detail/toSee";

/*
##### 提交订单
api: /api/goods/order_submit
methods: POST
参数： id(商品 id), userOption, addressid, contactInfo
userOption(用户选择): id(场次 id)
contactInfo(联系人信息): name, tel
*/
const GOODS_ORDER_SUBMIT = "/api/goods/order_submit";

//### 我的

/* 
#### 发送验证码
**method:** get
**参数:** tel   
*/
const SEND_CODE_API = "/api/user/send_code";

/* 
#### 注册
**method:** post
**参数:** tel      password
*/
const REGIESTER_API = "/api/user/regiester";

/* 
#### 登录
**method:** post
**参数:** tel   type('code',  'password' )  value 
*/
const LOGIN_API = "/api/user/login";

/*
#### 检查登录是否过期
api: /api/user/check_login
methods: get
参数：无
*/
const CHECK_LOGIN = "/api/user/check_login";

/*
#### 登录退出
api: /api/user/logout
methods: get
参数：无
*/
const LOGOUT_API = "/api/user/logout";

// ## 地址


/*
#### 新增地址
api: /api/address/add
methods: post
参数： name, tel, address, code
*/
const ADD_ADDRESS_API = "/api/address/add";

/*
####  获得地址列表接口
methods: get
参数： 无
*/  
const ADDRESS_LIST_API = "/api/address/find_by_user";

// ## 订单

// #### 新增订单
// **method:** post
// **url:** /api/order/add
// **参数:** goodsid,   name, picUrl,  selectInfo, addressid
const ADD_ORDER_API = "/api/order/add";

// #### 订单列表
// **method:** get
// **url:** /api/order/find_by_user
// **参数:** 无
const ORDER_LIST_API = "/api/order/find_by_user";

// #### 修改订单
// **method:** get
// **url:** /api/order/modify
// **参数:** status
const ORDER_MODIFY = "/api/order/modify";

export default {
  CITYLIST,
  BRAND_BY_KEYWORD,
  BRAND_DETAIL,
  COMMENT_SUPPORT,
  COMMENT_DETAIL,
  SUBMIT_COMMENT,
  HOME_BANNER_LIST,
  HOME_CLASSIFY,
  GOODS_RECOMMEND_LIST,
  GOODS_MORE_LIST,
  BY_CLASSIFY_ID,
  GOODS_DETAIL,
  GOODS_DETAIL_TOSEE,
  GOODS_ORDER_SUBMIT,
  SEND_CODE_API,
  REGIESTER_API,
  LOGIN_API,
  CHECK_LOGIN,
  LOGOUT_API,
  ADD_ADDRESS_API,
  ADDRESS_LIST_API,
  ADD_ORDER_API,
  ORDER_LIST_API,
  ORDER_MODIFY,
  SEARCH_HOTLIST
};
