<template>
  <div class="page-wrap">
    <div class="page subpage" id="serve">
      <app-header title="麦小蜜" hasBack></app-header>
      <app-scroll class="content">
        <div class="inputWrap">
          <input type="text" class="ipt" ref="ipt" @keyup.enter="keyUpAction" />
          <van-icon name="plus" />
        </div>

        <ul class="list" ref="list">
          <!-- 显示的咨询商品 -->
          <li class="left">
            <good-info class="good-info" v-if="goodInfo" />
            <span v-else>没有商品咨询</span>
          </li>
          <li class="left">
            <span>亲，麦小蜜看到你在关注以上项目，您想咨询这个项目的什么问题呢？</span>
          </li>
          <!-- 以下的才是聊天的内容 -->
        </ul>
      </app-scroll>
    </div>
  </div>
</template>

<script>
import GoodInfo from "./children/GoodInfo";
import allService from "../../../services/allService";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "serve",
  components: {
    [GoodInfo.name]: GoodInfo
  },
  computed: {
    ...mapState({
      // 正在浏览的商品
      goodInfo: state => state.all.serveGood
    })
  },
  methods: {
    // 创建左边消息
    msgLeft(val) {
      let msg = document.createElement("li");
      msg.setAttribute("class", "left");
      msg.innerHTML = "<span>" + val + "</span>";
      this.$refs.list.appendChild(msg);
    },
    //创建右边消息
    msgRight(val) {
      let msg = document.createElement("li");
      msg.setAttribute("class", "right");
      msg.innerHTML = "<span>" + val + "</span>";
      this.$refs.list.appendChild(msg);
      console.log(this.$refs.list);
    },
    // input 抬起事件
    async keyUpAction() {
      this.msgRight(this.$refs.ipt.value);
      let self = this;
      axios
        .get(
          "http://www.tuling123.com/openapi/api?key=4670f9d766704929b7983312808cdfa7&userid=xiaocuo&info=" +
            this.$refs.ipt.value
        )
        .then(function(response) {
          self.msgLeft(response.data.text);
        })
        .catch(function(error) {
          console.log('请求图灵机器人出错:' + error);
        })
        .then(function() {
        });

      this.$refs.ipt.value = "";
    }
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;
.content {
  background-color: #f3f4f5;
  box-sizing: border-box;
  padding: $padding;

  .good-info {
    padding: $padding;
  }
  .inputWrap {
    width: 90%;
    display: flex;
    height: 115px;
    line-height: 115px;
    position: absolute;
    bottom: 30px;
    box-sizing: border-box;

    .ipt {
      flex: 1;
      font-size: 40px;
      color: #333;
      padding: 38px 50px;
      background-color: #fff;
      border: none;
      outline: none;
      border-radius: 50px;
      box-sizing: border-box;
    }

    .van-icon {
      width: 118px;
      height: 118px;
      margin-left: 20px;
      text-align: center;
      line-height: 118px;
      border-radius: 50%;
      background-color: #fff;
      color: $mainColor;
    }
  }

  .list {
    width: 100%;

    li {
      overflow: hidden;
      margin-top: 32px;
      padding: 30px;
    }

    .left span {
      float: left;
      background-color: #fff;
      padding: 30px 70px;
      border-radius: 60px 70px 70px 10px;
      font-size: 38px;
      line-height: 60px;
    }

    .right span {
      float: right;
      background-color: #fff;
      padding: 30px 70px;
      border-radius: 60px 70px 10px 70px;
      font-size: 38px;
    }
  }
}
</style>