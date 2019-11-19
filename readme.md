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



###### 正则表达式
- let nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
- let idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  