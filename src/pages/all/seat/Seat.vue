<template>
  <div class="page-wrap">
    <div class="page subpage" id="seat">
      <app-header title="选座" hasBack></app-header>
      <app-scroll class="scrollContent">
        <ul class="seatList">
          <li class="seat" :class="{active: activeIndex == index}" v-for="(item, index) in 40" :key="index" @click="selectAction(index)"></li>
        </ul>
      </app-scroll>
       <!-- 底部栏 -->
        <div class="tabbar border-top">
          <p>您选中的位置: <span class="seleted">{{activeIndex + 1}}号</span></p>
          <div class="define" @click="defineSeat">
            <span>确定选座</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "seat",
  components: {},
  props: {
    id: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    ...mapState({
      // 选中的商品
      selectedGood: state => state.all.selectedGood
    })
  },
  watch: {},
  methods: {
    // 选择座位
    selectAction(index) {
      this.activeIndex = index;
    },
    // 确认选座
    defineSeat() {
      if(this.selectedGood) {
        this.selectedGood.seat = this.activeIndex + 1;
        this.$store.commit('all/setSelectedGood', this.selectedGood);
        this.$router.push(`/all/detail/${this.id}/submitOrder`);
      }else {
        this.$toast('您未选中商品');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

    .scrollContent{
      background-color: #f8f8f8;

    .seatList {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: $padding;
      display: flex;
      flex-direction: row;
      align-content: center;
      flex-wrap: wrap;

      .seat {
        width: 100px;
        height: 100px;
        margin: 34px;
        background-color: #bbb;
        text-align: center;
        line-height: 100px;
        border-radius: 24px;
        color: #333;
      }
      .active {
        background-color: $mainColor;
      }
    }}
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
        .seleted {
          color: $mainColor;
          font-size: 40px;
        }
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

</style>