const Mock = require("mockjs");

const citylist = require("./cities.json");

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: "200 - 400"
});

Mock.mock("/api/citylist", {
  code: 0,
  message: "ok",
  data: {
    citylist
  }
});

Mock.mock("/api/search/hotList", {
  code: 0,
  message: "ok",
  data: {
    "list|10": [{
      "id|+1": 0,
      name: "@cname",
      avarImg: "@image('200x200',@color)",
      "tag|1": "['热','爆','','','','','']"
    }]
  }
});

Mock.mock(RegExp("/api/brand/by_keyword" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    brand_id: "@natural(10, 99)",
    name: "@cname",
    avarImg: "@image('200x200',@color)",
    performanceNum: "@natural(1, 99)",
    fansNum: "@natural(1, 99)",
    backgroundImg: "@image('400x100',@color)",
    detail: '@city() / @datetime(yyyy.MM.dd HH:mm)/ @ctitle/ @city() / @datetime(yyyy.MM.dd HH:mm)/ @ctitle',
    "maxprice|500-1000": 0,
    "minproce|10-500":0,
    "list|5-10": [
      {
        "id|+1": 0,
        title: "@ctitle()",
        time: "@datetime(yyyy.MM.dd HH:mm)",
        address: "@city() | @ctitle",
        tags: "@ctitle(2,3)",
        flag: "@ctitle(2,3)",
        "price|10-1000": 0,
        picUrl: "@image('300x300',@color)"
      }
    ]
  }
});


Mock.mock(RegExp("/api/brand/brand_detail" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    brand_id: "@natural(10, 99)",
    name: "@cname",
    avarImg: "@image('200x200',@color)",
    performanceNum: "@natural(1, 99)",
    fansNum: "@natural(1, 99)",
    backgroundImg: "@image('400x400',@color)",
    detail:'@city() / @datetime(yyyy.MM.dd HH:mm)/ @ctitle/ @city() / @datetime(yyyy.MM.dd HH:mm)/ @ctitle',
    "maxprice|500-1000": 0,
    "minproce|10-500":0,
    "list|5-10": [
      {
        "id|+1": 0,
        title: "@ctitle()",
        time: "@datetime(yyyy.MM.dd HH:mm)",
        address: "@city() | @ctitle",
        tags: "@ctitle(2,3)",
        flag: "@ctitle(2,3)",
        "price|10-1000": 0,
        picUrl: "@image('300x300',@color)"
      }
    ],
    "commentList|5-10": [
      {
        "comment_id|+1": 0,
        user_id: "@natural(10, 99)",
        userImg: "@image('100x100',@color)",
        userName: "@cname()",
        "scoreNum|1-5": 1,
        commentCon: "@cparagraph",
        commentDate: "@datetime(MM.dd)",
        commentNum: "@natural(1, 99)",
        supportNum: "@natural(1, 99)",
        "commentImg|1-6": ["@image('300x300',@color)"]
      }
    ]
  }
});

Mock.mock("/api/comment/support", {
  code: 0,
  message: "ok",
  data: null
});



Mock.mock(RegExp("/api/brand/comment_detail" + ".*"), {
  code: 0,
  message: "ok",
  data: {
      detail:{
        "comment_id":'@natural(10, 99)',
        user_id: "@natural(10, 99)",
        userImg: "@image('100x100',@color)",
        userName: "@cname()",
        "scoreNum|1-5": 1,
        commentCon: "@cparagraph",
        commentDate: "@datetime(MM.dd)",
        commentNum: "@natural(1, 99)",
        supportNum: "@natural(1, 99)",
        "commentImg|1-6": ["@image('300x300',@color)"]
      },
      "commentItem|1-10": [{
        userAvar: "@image('100x100',@color)",
        user_id: "@natural(10, 99)",
        userName: "@cname()",
        commentCon: "@cparagraph",
        commentTime: "@datetime(MM.dd)",
        commentNum: "@natural(1, 99)",
        supportNum: "@natural(1, 99)",
        "scoreNum|1-5": 1,
      }]
    }
});

Mock.mock("/api/brand/submit_comment", {
  code: 0,
  message: "ok",
  data: null
});

Mock.mock("/api/home/banner_list", {
  code: 0,
  message: "ok",
  data: {
    "bannerList|8": [{
      picUrl: "@image(250x100',@color)",
      "id|+1": 0
    }]
  }
});

Mock.mock(RegExp("/api/home/classify" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    "list|10": [{
      name: "@ctitle(3,4)",
      picUrl: "@image(100x100',@color)",
      "classify_id|+1": 0
    }]
  }
});

Mock.mock("/api/goods/recommend_list", {
  code: 0,
  message: "ok",
  data: {
    "list|4": [{
      title: "@ctitle",
      "id|+1": 0,
      "list|10": [{
        "id|+1": 0,
        imgUrl: "@image(100x100',@color)",
        name: "@ctitle",
        "price|10-1000": 0,
        tag: "@ctitle(3,4)"
      }]
    }]
  }
});

Mock.mock(RegExp("/api/goods/more_list" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    title: "@ctitle",
    subTitle: "@ctitle()",
    "list|10-20": [{
      "id|+1": 0,
      city: "@citys",
      imgUrl: "@image(250x100',@color)",
      name: "@ctitle",
      date: "@datetime(yyyy.MM.dd - MM.dd)",
      location: "@city()" | "@ctitle",
      toSeeNum: "@float(60, 100)",
      "price|10-1000": 0,
      tag: "@ctitle(3,4)"
    }]
  }
});

// 根据分类拿数据
Mock.mock(RegExp("/api/goods/goods_list/by_classify_id" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    "list|10": [{
      "id|+1": 0,
      title: "@ctitle()",
      time: "@datetime(yyyy.MM.dd HH:mm)",
      address: "@city()" | "@ctitle",
      tags: "@ctitle()",
      "price|10-1000": 0,
      picUrl: "@image('300x300',@color)",
      flag: "@ctitle(3,4)"
    }]
  }
});

// 详情页面的数据
Mock.mock(RegExp("/api/goods/goods_detail" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    imgUrl: "@image('300x300',@color)",
    title: "@ctitle()",
    bgColor: "@color",
    "tag|2-3": ["@ctitle(2,3)"],
    "minPrice|10-500": 0,
    "maxPrice|500-1000": 0,
    serverDesc: "@csentence()",
    city: "@city()",
    location: "@csentence",
    date: "@datetime(yyyy.MM.dd HH:mm)",
    dateDesc: "@csentence",
    "selectOption|1-3": [{
      siteName: '@datetime(yyyy.MM.dd HH:mm)',
      "siteNameOption|2-5": [{
        "id|+1": 0,
        "price|10-1000": 0,
        "isSale": '@boolean'
      }]
    }],
    detail: '@cparagraph() @cparagraph() @cparagraph()',
    "commentList|5-10": [{
      "comment_id|+1": 0,
      user_id: "@natural(10, 99)",
      userImg: "@image('100x100',@color)",
      userName: "@cname()",
      "scoreNum|1-5": 1,
      commentCon: "@cparagraph",
      commentDate: "@datetime(MM.dd)",
      commentNum: "@natural(1, 99)",
      supportNum: "@natural(1, 99)",
      "commentImg|1-6": ["@image('300x300',@color)"]
    }],
    request: '@cparagraph() @cparagraph() @cparagraph()',
    "list|10": [{
      "id|+1": 0,
      title: "@ctitle()",
      time: "@datetime(yyyy.MM.dd HH:mm)",
      address: "@city()" | "@ctitle",
      tags: "@ctitle()",
      "price|10-1000": 0,
      picUrl: "@image('300x300',@color)",
      flag: "@ctitle(3,4)"
    }]
  },
});

Mock.mock(RegExp("/api/goods/goods_detail/toSee" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});

Mock.mock(RegExp("/api/goods/order_submit" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});



// Mock.mock(RegExp("/api/user/send_code"+ ".*"), {
//   code: 0,
//   message: "ok",
//   data: {
//     code: '@natural(100000-999999)'
//   }
// });




// Mock.mock(RegExp("/api/user/regiester" + ".*"), {
//   code: 0,
//   message: "ok",
//   data: null
// });




// Mock.mock(RegExp("/api/user/login" + ".*"), {
//   code: 0,
//   message: "ok",
//   data: null
// });

Mock.mock(RegExp("/api/user/check_login" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});

Mock.mock(RegExp("/api/user/logout" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});



// Mock.mock(RegExp("/api/address/add" + ".*"), {
//   code: 0,
//   message: "ok",
//   data: null
// });



// Mock.mock(RegExp("/api/address/modify" + ".*"), {
//   code: 0,
//   message: "ok",
//   data: null
// });

Mock.mock(RegExp("/api/address/find_by_user" + ".*"), {
  code: 0,
  message: "ok",
  data: {}
});

Mock.mock(RegExp("/api/order/add" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});

Mock.mock(RegExp(" /api/order/delete" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});

Mock.mock(RegExp(" /api/order/modify" + ".*"), {
  code: 0,
  message: "ok",
  data: null
});

Mock.mock(RegExp("/api/order/find_by_user" + ".*"), {
  code: 0,
  message: "ok",
  data: {
    "list|3-20": [{
      "id|+1": 0,
      "status|0-3": 0,
      title: "@ctitle()",
      time: "@datetime(yyyy.MM.dd HH:mm)",
      address: "@city()" | "@ctitle",
      "price|10-1000": 0,
      picUrl: "@image('300x300',@color)",
      flag: "@ctitle(3,4)",
      "num|1-6": 0
    }]
  }
});