<template>
  <div class="tabbar">
    <div class="service">
      <van-icon name="chat-o" />
      <span>客服</span>
    </div>
    <div class="toSee">
      <van-icon name="like-o" />
      <span>想看</span>
    </div>
    <div class="seatPurchase">
      <span>选座购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
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