<template>
  <div class="tabbar">
    <div class="service" @click="serveAction">
      <van-icon name="chat-o" />
      <span>客服</span>
    </div>
    <div class="toSee" @click="toSeeAction">
      <van-icon :name="name" color="#ff1268"/>
      <span>{{toSeeText}}</span>
    </div>
    <div class="seatPurchase" @click="toBuyAction">
      <span>选座购买</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tabbar",
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      name: 'like-o',
      toSeeText: '想看'
    };
  },
  computed: {
    ...mapState({
      // 正在浏览的商品
      goodInfo: state => state.all.serveGood
    })
  },
  methods: {
    // 客服
    serveAction() {
      this.$router.push(`/all/detail/${this.id}/serve`);
    },
    // 想看
    toSeeAction() {
      // 切换图标
      // 保存数据到 vuex 里面
      if(this.name == 'like-o') {
        this.name = 'like';
        this.toSeeText = '我想看';
        this.$toast('已添加到想看的演出列表');
      }else {
        this.name = 'like-o';
        this.toSeeText = '想看';
      }
      this.$store.commit('selectCityAction', this.goodInfo);
    },
    // 立即购买
    toBuyAction() {
      // 通知父组件，显示选择框
      this.$emit('buying', true);
    }
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

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

  .service {
    border-right: 1px solid #eee;
  }

  .service, .toSee {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .van-icon {
      font-size: 64px;
      color: #3c3f43;
    }
    span {
      font-size: 30px;
      color: #666;
      margin-top: 8px;
    }
  }
  .seatPurchase {
    height: 100%;
    flex: 3;
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
</style>