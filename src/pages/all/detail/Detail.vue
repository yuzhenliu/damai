<template>
  <div class="page-wrap">
    <div class="page subpage" id="detail">
      <app-header title="详情" hasBack :titleOpacity="titleOpacity">
        <van-icon name="share" slot="right-btn" class="right-btn" @click="toShareAction"/>
      </app-header>
      <!-- 头部固定定位的商品详情 -->
      <div
        class="goodDetail"
        :style="{backgroundColor: goodDetail.bgColor, opacity: opacity}"
        :class="{disable: disable}"
      >
        <div class="left">
          <img :src="goodDetail.imgUrl" />
        </div>
        <div class="right">
          <h3 class="title">{{goodDetail.title}}</h3>
          <p class="price">
            <span class="minPrice">￥{{goodDetail.minPrice}}</span>-
            <span class="maxPrice">￥{{goodDetail.maxPrice}}</span>
          </p>
          <p class="tagsWrap">
            <span class="tag" v-for="(item, index) in goodDetail.tag" :key="index">{{item}}</span>
            <span class="get">
              <i>领取</i>
              <van-icon name="arrow" />
            </span>
          </p>
        </div>
      </div>
      <!-- 滚动内容区域 -->

      <app-scroll class="scrollContent" ref="IScroll">
        <div class="yu-mask"></div>
        <div class="detailContent">
          <p class="serverDesc">{{goodDetail.serverDesc}}</p>

          <!-- 票信息 -->
          <ticket-info class="ticketInfo" :title="goodDetail.date" :info="goodDetail.dateDesc" />
          <ticket-info class="ticketInfo" :title="goodDetail.city" :info="goodDetail.location">
            <van-icon name="location" slot="icon" @click="getLocation" />
          </ticket-info>

          <!-- 少了一个跳到歌手页面的组件和数据 -->
          <!-- 详情 / 须知 / 推荐 -->
          <van-tabs v-model="active" line-width="70" line-height="4" color="#ff1268" sticky>
            <van-tab v-for="(item, index) in tablist" :title="item.name" :key="index"></van-tab>
          </van-tabs>
          <!-- tabCon -->
          <div class="tabCon">
            <div v-if="active === 0" v-html="goodDetail.detail" class="detailCon"></div>
            <div v-else-if="active === 1" v-html="goodDetail.request" class="requestCon">须知内容</div>
            <div v-else-if="active === 2">
              <good-list :goodsListArr="goodDetail.list" />
            </div>
          </div>
        </div>
      </app-scroll>

      <!-- 如果用户点击了立即购买显示选项 -->
      <van-popup
        position="bottom"
        v-model="show"
        :style="{ height: '70%' }"
        closeable
        round
        @click-overlay="closeAction"
      >
        <app-scroll class="chooseContent" ref="chooseScroll">
          <h6 class="siteTitle">
            场次
            <span>场次时间均为演出当地时间</span>
          </h6>
          <div class="siteOption">
            <span
              class="siteName"
              :class="{siteNameActive: siteNameActiveIndex == index}"
              v-for="(site, index) in goodDetail.selectOption"
              :key="index"
              @click="changeDateAction(site, index)"
            >{{site.siteName}}</span>
          </div>
          <h6 class="ticketTitle">票档</h6>
          <div class="ticketOption">
            <span
              class="ticketName"
              v-for="(item, index) in ticketArr"
              :key="item.id"
              :class="{ticketActive: ticketActiveIndex == index, preSold: !item.isSale}"
              @click="changeTicketAction(index)"
            >{{item.price}}(内场)</span>
          </div>
        </app-scroll>
        <!-- 底部栏 -->
        <div class="tabbar">
          <p v-if="ticketArr[ticketActiveIndex] && ticketArr[ticketActiveIndex].isSale">更多选项请前往选座页</p>
          <div class="define" @click="defineAction" v-if="ticketArr[ticketActiveIndex] && ticketArr[ticketActiveIndex].isSale">
            <span>确定</span>
          </div>
          <div class="define" @click="submitAction" v-else>
            <span>提交开售提醒</span>
          </div>
        </div>
      </van-popup>

      <!-- 如果用户点击了分享 -->
      <van-popup
        v-model="shareShow"
        position="bottom"
        :style="{ height: '24%' }"
        >
        <p class="shareP" >
          <span @click="shareAction" class="shareBtn">确认分享</span>
        </p>
        <share-wrap />
        </van-popup>

      <!-- 固定在底部的 tabbar -->
      <tabbar :id="id" @buying="toBuyAction" />
    </div>
    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import commonService from "../../../services/commonService";
import allService from "../../../services/allService";
import { Tab, Tabs, Popup } from "vant";
import TicketInfo from "./children/TicketInfo";
import Tabbar from "./children/Tabbar";
import GoodList from "../../all/root/children/Good-List";
import ShareWrap from "./children/ShareWrap";
export default {
  name: "detail",
  components: {
    [Tabbar.name]: Tabbar,
    [TicketInfo.name]: TicketInfo,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [GoodList.name]: GoodList,
    [Popup.name]: Popup,
    [ShareWrap.name]: ShareWrap,
  },
  props: {
    id: {
      type: [String, Number]
    }
  },
  data() {
    return {
      goodDetail: {},
      disable: false,
      scrollY: 0,
      tablist: [
        {
          name: "详情"
        },
        {
          name: "须知(Q&A)"
        },
        {
          name: "推荐"
        }
      ],
      active: 0, // 选中的 index
      show: false, // 显示选择框
      ticketArr: [], // 票档
      siteNameActiveIndex: 0, // 选择的场次名称
      ticketActiveIndex: 0, // 票档的 下标
      shareShow: false, // 点击了分享
    };
  },
  methods: {
    // 请求数据
    async requestGoodsDetail(id) {
      const result = await allService.requestGoodsDetail(id);
      this.goodDetail = result;
      this.ticketArr = this.goodDetail.selectOption[0].siteNameOption;
      // 设置 vuex 中正在咨询的商品
      this.$store.commit("all/setServeGood", {
        address: this.goodDetail.location,
        city: this.goodDetail.city,
        flag: this.goodDetail.tag,
        id: this.id,
        picUrl: this.goodDetail.imgUrl,
        price: this.goodDetail.minPrice,
        tags: this.goodDetail.tag,
        time: this.goodDetail.date,
        title: this.goodDetail.title,
        toSeeNum: 1
      });
    },
    // 获得地理位置
    getLocation() {
      this.$router.push(`/all/detail/${this.id}/location`);
    },
    // 选择框
    toBuyAction(flag) {
      this.show = true;
    },
    // 关闭弹出层
    closeAction() {
      this.show = false;
    },
    // 切换时间
    changeDateAction(site, index) {
      this.ticketArr = site.siteNameOption;
      this.siteNameActiveIndex = index;
    },
    // 切换票档
    changeTicketAction(index) {
      this.ticketActiveIndex = index;
    },
    // 点击了确定按钮
    defineAction() {
      // 点击了确定
      // 需要拿到用户选择的场次和票档保存到 vuex 里面，进行跳转
      let siteName = this.goodDetail.selectOption[this.siteNameActiveIndex].siteName;
      let ticket = this.ticketArr[this.ticketActiveIndex];
      this.$store.commit('all/setSelectedGood', {
        siteName,
        ticket,
        seat: 0,
        goodDetail: this.goodDetail
      });
      this.$router.push(`/all/detail/${this.id}/seat`);
    },
    // 提交开售提醒
    submitAction() {
      this.$toast('提交成功,开售前,将通过 APP通知');
    },
    // 去分享
    toShareAction() {
      this.shareShow = true;
    },
    // 确认分享
    shareAction() {
      this.$toast('分享成功');
      this.shareShow = false;
    },
  },
  computed: {
    // 根据this.$refs.IScroll.scroll.y 来改变 opacity
    // Math.abs(-566px / this.$refs.IScroll.scroll.y) == 1  opacity == 0
    // 0 - -566  ---> 1 - 0  我也不知道为什么变成了 160
    opacity() {
      return 1 - Math.abs(this.scrollY / 300);
    },
    // 标题的透明度
    titleOpacity() {
      return 1 - this.opacity;
    }
  },
  watch: {
    id() {
      this.requestGoodsDetail(this.id);
    }
  },
  created() {
    // 初始化数据
    this.requestGoodsDetail(this.id);
  },
  mounted() {
    // 监听滚动条的滚动事件
    if (this.$refs.IScroll) {
      this.$refs.IScroll.scroll.on("scroll", () => {
        if (this.$refs.IScroll.scroll) {
          this.scrollY = this.$refs.IScroll.scroll.y;
        }
        // 当滚动条滚动的 y 小于 0 时 disable 为 true
        // 当滚动条滚动的 y 大于 0 时 disable 为 false
        if (this.$refs.IScroll.scroll.y < 0) {
          this.disable = true;
        } else {
          this.disable = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

#detail {
  .goodDetail.disable {
    z-index: 0;
  }
  .goodDetail {
    position: fixed;
    top: 154px;
    left: 0;
    width: 100%;
    height: 566px;
    box-sizing: border-box;
    padding: 42px;
    display: flex;
    z-index: 33;

    .left {
      width: 360px;
      height: 482px;
      border-radius: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }

    .right {
      margin-left: 32px;
      flex: 1;

      .title {
        position: relative;
        font-size: 44px;
        color: #fff;
        font-weight: bold;
        height: 192px;
        line-height: 64px;
        overflow: hidden;
        text-align: 20px;
      }
      .price {
        margin-top: 90px;
        padding: 26px 0;
        border-bottom: 1px solid #9cb886;
        font-size: 38px;
        color: #fff;
        font-weight: bold;

        span {
          font-size: 38px;
          color: #fff;
        }
      }
      .tagsWrap {
        padding: 24px 0;
        position: relative;

        .tag {
          font-size: 26px;
          color: #fff;
          padding: 12px;
          background-color: $mainColor;
          margin: 0 10px;
          border-radius: 40px;
        }
        .get {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);

          i {
            font-size: 34px;
            color: #9cb886;
          }
          .van-icon {
            font-size: 34px;
            color: #9cb886;
          }
        }
      }
    }
  }
  .scrollContent {
    position: absolute;
    top: 154px;
    left: 0;
    bottom: 172px;
    width: 100%;

    .yu-mask {
      width: 100%;
      height: 566px;
      background-color: transparent;
    }
    .detailContent {
      width: 100%;
      border-radius: 20px;
      background-color: #f8f8f8;

      .serverDesc {
        width: 100%;
        height: 110px;
        line-height: 110px;
        box-sizing: border-box;
        padding: 0 $padding;
        color: #333;
        background-color: #f8f8f8;
      }

      // 票信息
      .ticketInfo {
        width: 100%;
        height: 234px;
        padding: 36px $padding;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
      }

      .van-tabs {
        margin-top: 30px;
      }

      .tabCon {
        min-height: 1000px;
        background-color: #fff;

        .detailCon,
        .requestCon {
          font-size: 38px;
          color: #666;
          box-sizing: border-box;
          padding: $padding;
          line-height: 60px;
        }
      }
    }
  }
  .van-popup {
    padding-top: 60px;
    padding-bottom: 200px;

    .chooseContent {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: $padding;
      overflow: auto;

      // 场次名称
      .siteTitle {
        font-size: 44px;
        color: #333;
        font-weight: bold;

        span {
          font-size: 33px;
          color: #aeaeae;
          margin-left: 20px;
          font-weight: normal;
        }
      }
      .siteOption {
        margin-top: 120px;

        .siteName {
          padding: 50px 30px;
          color: #333;
          background-color: #f8f8f8;
          border-radius: 14px;
          font-size: 38px;
          margin-top: 30px;
          display: block;
        }
        .siteNameActive {
          color: $mainColor;
          background: #fbeaef;
        }
      }
      .ticketTitle {
        font-size: 44px;
        color: #333;
        font-weight: bold;
        margin-top: 200px;
      }
      .ticketOption {
        margin-top: 120px;

        .ticketName {
          padding: 50px 30px;
          color: #333;
          background-color: #f8f8f8;
          border-radius: 14px;
          font-size: 38px;
          display: block;
          margin-top: 30px;
        }
        .ticketActive {
          color: $mainColor;
          background: #fbeaef;
        }
        .preSold {
          position: relative;
        }
        .preSold:before {
          content: "开售提醒";
          position: absolute;
          top: 0;
          left: 0;
          font-size: 30px;
          color: #333;
        }
      }
    }
    .tabbar {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 172px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 $padding;

      p {
        flex: 7;
        font-size: 33px;
        color: #999;
      }
      .define {
        height: 100%;
        flex: 4;
        box-sizing: border-box;
        padding: 22px 30px;

        span {
          display: block;
          width: 100%;
          height: 100%;
          background-color: $mainColor;
          color: #fff;
          text-align: center;
          font-size: 38px;
          line-height: 122px;
          border-radius: 60px 70px 70px 10px;
        }
      }
    }
  }
  .shareP {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
    height: 100px;
    line-height: 100px;

    .shareBtn {
      padding: 20px $padding;
      background-color: $mainColor;
      color: #fff;
      font-size: 50px;
      border-radius: 20px;
    }
  }
}
</style>