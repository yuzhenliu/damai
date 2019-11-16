# yu-dev 的分支

## 成员

### 邓昌顺 deng-dev

### 刘玉珍 yu-dev

### 张慧 hui-dev

## 约束

### 类名 D Y H

### 定位 z-index

### 内容: 0 -100

### 界面: 100 - 200

### 遮罩层: 200 - 300

### 组件顺序

```
Vue.component('组件名', {
  name
  components
  directives
  filters
  template
  props
  data
  computed
  watch
  methods
  beforeRouteEnter
  beforeRouteUpdate
  beforeRouteLeave
  10个生命周期方法
  errorCaptured
});

  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}

```

master 分支上需要修改的

## 头部的样式

```
 .right-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 35px;
    font-size: 70px;
    line-height: 154px;
  }
```

$mainColor: #ff1268;
$padding: 40px;
border-radius: 60px 70px 70px 10px;

### api 
```
api

```

2019.11.15 20:59

修改 fastclick 快速点击出现 bug 事件

Unable to preventDefault inside passive event listener due to target being treated as passive.

     原因：google浏览器为了最快速的相应touch事件，做出的改变。

历史：当浏览器首先对默认的事件进行响应的时候，要检查一下是否进行了默认事件的取消。这样就在响应滑动操作之前有那么一丝丝的耽误时间。
现在：google 就决定默认取消了对这个事件的检查，默认时间就取消了。直接执行滑动操作。这样就更加的顺滑了。
但是浏览器的控制台就会进行错误提醒了。
————————————————
解决方案
1、注册处理函数时，用如下方式，明确声明为不是被动的
window.addEventListener(‘touchmove’, func, { passive: false })

2、应用 CSS 属性 touch-action: none; 这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发。
touch-action 还有很多选项，
————————————————







  <!-- 票价信息 -->
        <div class="ticketInfoWrap" v-if="selectedGood">
          <!-- 地址 /票档等 -->
          <div class="addressInfo border-bottom">
            <p class="title">{{selectedGood.goodDetail.location}}</p>
            <p class="info">{{selectedGood.goodDetail.city}}</p>
          </div>
          <div class="ticketInfo border-bottom">
            <p class="date">{{selectedGood.goodDetail.date}}</p>
            <p class="price">￥{{selectedGood.ticket.price}}票档 x 1张</p>
            <p class="seat">座位号： {{selectedGood.seat}}</p>
          </div>
          <div>
            <p class="warmTip border-bottom">
              <van-icon name="warning-o" color="#fff" />
              <span>不支持退</span>
              <van-icon name="passed" color="#fff" />
              <span>可开发票</span>
              <van-icon name="arrow" class="more" />
            </p>
          </div>
        </div>
        <!-- 选择 -->
        <div class="chooseWrap">
          <!-- 实际观演人 / 配送方式(电子票/ 地址) / 联系人 / 店铺优惠 / 支付方式 -->

          <div class="observer">
            <span class="tit">实际观演人</span>
            <span class="tip">仅需选择1位: 入场需携带对应证件</span>
            <span class="btn" @click="addAction">新增</span>
          </div>
          <div v-if="observerInfo" class="observerInfo">
            <span class="name">{{observerInfo.name}}</span>
            <span class="idCard">身份证{{observerInfo.idCard}}</span>
            <input type="checkbox" class="check" />
          </div>

          <div v-if="selectAddress" class="postAddr">
            <!-- 有配送地址 -->
            <p class="tit">配送方式</p>
            <p class="way">快递</p>
            <van-cell
              :title="(selectAddress[0].name+ '  ' + selectAddress[0].tel)"
              :label="selectAddress[0].address"
              is-link
            />
            <van-cell title="运费" label="￥18.00" />
          </div>
          <div v-else class="postAddr-o">
            <!-- 无配送地址 -->
            <p class="tit">配送方式</p>
            <p class="way">快递</p>
            <van-cell title="新增收货地址" is-link />
          </div>

          <!-- 联系人 -->
          <div class="contactWrap">
            <p class="tit">联系人</p>
            <p class="name">
              <input type="text" placeholder="请填写联系人姓名" />
            </p>
            <p class="tel">
              <input type="text" placeholder="请填写联系人电话" />
            </p>
          </div>

          <!-- 支付方式 -->
          <div class="payWays">
            <p>
              <span class="tit">支付宝</span>
              <van-icon name="passed" :class="{active: isZHIFUBAO}" @click="changePayWay" />
            </p>
            <p>
              <span class="tit">微信</span>
              <van-icon name="passed" :class="{active: !isZHIFUBAO}" @click="changePayWay" />
            </p>
          </div>
        </div>