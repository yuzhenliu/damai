
### 首页

###### 请求城市列表
api:/api/cities.json
method： GET
参数：无
返回值： message   code   data
{
  code: 0,
  message: 'ok',
  data: json
}

##### 搜索关键字搜索品牌
api: /api/brand/by_keyword
methods: GET
参数： keyword
返回值：：  message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    brand_id,
    name,
    avarImg,
    performanceNum,
    fansNum,
    backgroundImg,
    list: [
      {
        id,
        title,
        time,
        address,
        tags,
        price,
        picUrl
      }
    ]
  }
}


##### 品牌详情
api: /api/brand/brand_detail
methods: GET
参数： brand_id
返回值：：  message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    brand_id,
    name,
    avarImg,
    performanceNum,
    fansNum,
    backgroundImg,
    list: [
      {
        id,
        title,
        time,
        address,
        tags,
        price,
        picUrl
      }
    ],
    commentList: [
      {
        comment_id,
        user_id,
        userImg,
        userName,
        scoreNum,
        commentCon,
        commentDate,
        commentNum,
        supportNum,
        commentImg: [
          {
            imgUrl,
          }
        ],

      }
    ]
  }
}

##### 点赞
api: /api/comment/support
methods: GET
参数： comment_id, flag
返回值：：  message     code
{
  code: 0,
  message: 'ok',
}


##### 评价详情
api: /api/brand/comment_detail
methods: GET
参数： comment_id,
返回值：：  message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    commentList: [
      {
        userAvar,
        user_id,
        userName,
        commentCon,
        commentTime
      }
    ]
  }
}




##### 提交评价
api: /api/brand/submit_comment
methods: POST
参数： comment_id, user_id,
返回值：：  message   code  
{
  code: 0,
  message: 'ok',
}



##### 首页轮播图
api: /api/home/banner_list
methods: GET
参数： 无
返回值：：  message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    bannerList: [
      {
        picUrl,
        id
      }
    ]
  }
}

##### 首页 / 全部 分类列表
api： /api/home/classify
method: GET
参数： 无
返回值： message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    list: [
      {
        name,
        picUrl,
        classify_id
      }
    ]
  }
}

##### 首页商品推荐列表
api： /api/goods/recommend_list
method: GET
参数： 无
返回值： message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    {
      title,
      id,
      list: [
        <!-- 固定10条 -->
        {
          imgUrl,
          name,
          price,
          tag
        }
      ]
    }
  }
}


##### 首页商品更多列表
api： /api/goods/more_list
method: GET
参数： id
返回值： message     code     data
{
  code: 0,
  message: 'ok',
  data: {
   title,
   subTitle,
   list: [
     {
      id,
      city,
      imgUrl,
      name,
      date,
      location,
      toSeeNum,
      price,
      tag
     }
   ]
  }
}


### 全部

##### 时间 / 城市选择 api  先不写

##### 分类列表在上

##### 根据分类请求商品列表
api： /api/goods/goods_list/by_classify_id
method: GET
参数： classify_id
返回值： message     code     data
{
  code: 0,
  message: 'ok',
  data: {
    list: [
      {
        id,
        title,
        time,
        address,
        tags,
        price,
        picUrl,
        flag
      }
    ],
  }
}


##### 商品详情页
api： /api/goods/goods_detail
method: GET
参数： id
返回值： message     code     data
{
  code: 0,
  message: 'ok',
  data: {
   {
     imgUrl,
     title,
     tag,
     minPrice,
     maxPrice,
     serverDesc,
     city,
     location,
     selectOption: {
       siteName: [
         {
           id,
           price,
           isSale,
         }
       ]
     },
     detail,
    commentList: [
      {
        comment_id,
        user_id,
        userImg,
        userName,
        scoreNum,
        commentCon,
        commentDate,
        commentNum,
        supportNum,
        commentImg: [
          {
            imgUrl,
          }
        ],
      }
    ],
    request,
    list: [
      {
        id,
        title,
        time,
        address,
        tags,
        price,
        picUrl,
        flag
      }
    ]
  }
}

##### 点赞
api: /api/goods/goods_detail/toSee
methods: GET
参数： id, flag
返回值：：  message     code
{
  code: 0,
  message: 'ok',
}


##### 提交订单
api: /api/goods/goods_detail/toSee
methods: POST
参数： id(商品 id), userOption, addressid, contactInfo
userOption(用户选择): id(场次 id)
contactInfo(联系人信息): name, tel
返回值：：  message code 
{
  code: 0,
  message: 'ok',
}


##### 我的

#### 发送验证码
api: /api/user/send_code
methods: get
参数： tel
返回值： message code 
{
  code: 0,
  message: 'ok',
}

#### 注册
api: /api/user/regiester
methods: post
参数： tel  password
返回值： message code 
{
  code: 0,
  message: 'ok',
}

#### 登录
api: /api/user/login
methods: post
参数： tel   type('code',  'password' )  value 
返回值： message code 
{
  code: 0,
  message: 'ok',
}

#### 检查登录是否过期
api: /api/user/check_login
methods: get
参数：无
返回值： message code 
{
  code: 0,
  message: 'ok',
}

#### 登录退出
api: /api/user/logout
methods: get
参数：无
返回值： message code 
{
  code: 0,
  message: 'ok',
}

## 地址

#### 新增地址
api: /api/address/add
methods: post
参数： name, tel, address, code
返回值： message code 
{
  code: 0,
  message: 'ok',
}



#### 删除地址

**method:** get

**url:** /api/address/delete

**参数:** id

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 修改地址

**method:** get

**url:** /api/address/modify

**参数:** id   name, tel, address, code 

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 地址列表

**method:** get

**url:** /api/address/find_by_user

**参数:** 无

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



## 订单

#### 新增订单

**method:** post

**url:** /api/order/add

**参数:** goodsid,   name, picUrl,  selectInfo, addressid

**返回值:** 

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 删除地址

**method:** get

**url:** /api/order/delete

**参数:** id

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 修改订单

**method:** get

**url:** /api/order/modify

**参数:** status

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 订单列表

**method:** get

**url:** /api/order/find_by_user

**参数:** 无

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```







Nodejs  调用短信的文档

https://cloud.tencent.com/document/product/382/3772





短信文档

https://cloud.tencent.com/document/product/382/3784
