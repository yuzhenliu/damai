<template>
  <div class="page" id="address">
    <app-header title="设置" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <div class="d-headportrait">
        <div class="headportrait">
          <img src="../../../assets/mine/default.png" alt />
        </div>
        <div class="information">
          <h2>麦子1dSDR</h2>
        </div>
      </div>
      <!-- 下列信息 -->
      <div class="install">
        <van-collapse class="d-list" v-model="activeNames">
          <van-collapse-item
            class="dlists"
            title="关于我们"
            name="1"
            size="large"
            ><h2>关于大麦</h2>
            <p>
              大麦网，成立于2004年，是中国领先的现场娱乐全产业综合服务提供商，业务覆盖演唱会、话剧、音乐剧、体育赛事、曲苑杂坛、亲子、展览休闲等多个领域。
            </p>
            <p>
              2017年3月，大麦网成为阿里巴巴全资子公司，融入阿里大文娱业务布局。
            </p>
            <p>
              作为阿里体系内连接文娱产业线上和线下的关键链条，大麦网在巩固自身在票务领域原有优势的基础上，持续发力产业上下游，致力于通过对内容、场馆、票务三大现场娱乐领域的全链路布局，全方位服务消费者，推动现场娱乐产业的业态升级。
            </p></van-collapse-item
          >
          <van-collapse-item class="dlists" title="联系我们" name="2">
            <p>
              大麦网/中国票务在线作为行业领军品牌，兼顾在线销售和传统渠道分销，为各方提供综合票务解决方案，在演出项目合作、演出信息发布、线上线下销售、无线增值服务、品牌营销等诸多方面真诚欢迎您的合作洽谈！如果您有合作意向请与我们联系！
            </p>
            <h2>大麦总部</h2>
            <p>
              <strong>官方客服电话</strong>
              ：1010-3721,400-610-3721 （工作时间：8：30-22：00）
            </p>
            <p>
              <strong>大麦演出</strong>
              ：Mailive@service.alibaba.com
            </p>
            <p>
              <strong>大麦体育</strong>
              ：damai_sport@alibaba-inc.com
            </p>
            <p>
              <strong>大麦国际</strong>
              ：damai-global@alibaba-inc.com
            </p>
            <p>
              <strong>大麦宣发：</strong>
              daxuanfa@list.alibaba-inc.com
            </p>
            <p>
              <strong>人力资源</strong>
              haifei.yhf@alibaba-inc.com
            </p>

            <p>
              <strong>媒体垂询</strong>
              ：damaipr@service.alibaba.com
            </p>
            <p>
              <strong
                >全国业务战略合作：damai-cooperation@alibabacloud.com</strong
              >
            </p>
          </van-collapse-item>
          <van-collapse-item class="dlists" title="客服电话" name="3">
            电话：1010-3721</van-collapse-item
          >
          <van-collapse-item class="dlists" title="品牌合作" name="4">
            <strong>【区域项目、品牌合作】</strong>
            <p>
              中西区：河南、山西、陕西、新疆、内蒙古、甘肃、宁夏、青海、西藏
            </p>
            <p>联系人：刘先生</p>
            <p>联系电话：18903716123</p>
            <p>联系邮箱：zijing.lzj@alibaba-inc.com</p>
            <hr />
            <p>
              中西区：河南、山西、陕西、新疆、内蒙古、甘肃、宁夏、青海、西藏
            </p>
            <p>联系人：刘先生</p>
            <p>联系电话：18903716123</p>
            <p>联系邮箱：zijing.lzj@alibaba-inc.com</p>
            <hr />
            <p>
              中西区：河南、山西、陕西、新疆、内蒙古、甘肃、宁夏、青海、西藏
            </p>
            <p>联系人：刘先生</p>
            <p>联系电话：18903716123</p>
            <p>联系邮箱：zijing.lzj@alibaba-inc.com</p>
            <hr />
            <p>
              中西区：河南、山西、陕西、新疆、内蒙古、甘肃、宁夏、青海、西藏
            </p>
            <p>联系人：刘先生</p>
            <p>联系电话：18903716123</p>
            <p>联系邮箱：zijing.lzj@alibaba-inc.com</p>
          </van-collapse-item>
        </van-collapse>
      </div>

      <van-button type="primary" size="large" color="red">退出登录</van-button>
    </app-scroll>
  </div>
</template>

<script>
import { Collapse, CollapseItem, Button } from "vant";
export default {
  data() {
    return {
      activeNames: [""]
    };
  },
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Button.name]: Button
  }
};
</script>

<style lang="scss">
#mine {
  height: 100%;
}
#address {
  z-index: 90;
  background: #fff;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  .dd_center {
    position: absolute;
    width: 100%;
    top: 154px;
    bottom: 0;
  }
  .d-headportrait {
    height: 276px;
    margin: 50px 100px;
    display: flex;
    justify-content: space-between;
    .headportrait {
      width: 180px;
      height: 180px;
      img {
        margin-top: 40px;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .information {
      flex: 1;
      line-height: 276px;
      padding: 0 80px;
      font-size: 70px;
      font-weight: 600;
    }
  }
  .install {
    width: 100%;
    height: 100%;
    font-size: 70px;
    .van-cell {
      line-height: 140px;
      height: 140px;
      font-size: 60px;

      margin-top: 70px;
    }
    .van-cell__title {
      line-height: 140px;
      height: 140px;
      font-size: 60px;
    }
    .van-cell__right-icon {
      line-height: 140px;
      height: 140px;
      font-size: 60px;
    }
  }
  .van-button {
    position: relative;
    left: 0;
    bottom: 0px;
    height: 200px;
    font-size: 70px;
    border-radius: 50px;
    margin: 100px 0;
  }
}
</style>
