<template>
  <div class="page-wrap">
    <div class="page subpage" id="seat">
      <app-header title="选座" hasBack></app-header>
      <app-scroll class="scrollContent">
        <ul class="seatList">
          <li
            class="seat"
            :class="{selected: (selectedPosition.indexOf(index) != -1 || tmpSelectedPosition.indexOf(index) != -1), active: (activeArr.indexOf(index) != -1)}"
            v-for="(item, index) in 40"
            :key="index"
            @click="selectAction(index)"
          ></li>
        </ul>
      </app-scroll>
      <!-- 底部栏 -->
      <div class="tabbar border-top">
        <p>
          您选中的位置:
          <span class="seletedInfo" v-for="(item, index) in activeArr" :key="index">{{item + 1}}号</span>
        </p>
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
      activeArr: [],
      tmpArr: [],
    };
  },
  computed: {
    ...mapState({
      // 选中的商品
      selectedGood: state => state.all.selectedGood,
      // 已经被选中的位置
      selectedPosition: state => state.all.selectedPosition,
      // 暂时被选中的位置，可能用户还没有付款
      tmpSelectedPosition: state => state.all.tmpSelectedPosition
    })
  },
  watch: {},
  methods: {
    // 选择座位
    selectAction(index) {
      if(this.selectedPosition.indexOf(index) != -1) {
        // 说明被人选中了
        this.$toast('亲，该位置已被选了哦');
        return;
      }
      if(this.tmpSelectedPosition.indexOf(index) != -1) {
        // 说明被人暂时选中了
        this.$toast('该位置已被预选，还有机会哦');
        return;
      }
      this.activeArr.push(index);
       this.$toast(`您选中了${index + 1} 号座位哦`);
    },
    // 确认选座
    defineSeat() {
      if (this.selectedGood) {
        if(this.activeArr.length == 0) {
          this.$toast('您还未选中座位号');
          return;
        }
        this.selectedGood.seat = this.activeArr;
        this.tmpArr = this.tmpArr.concat(this.activeArr);
        this.$store.commit("all/setSelectedGood", this.selectedGood);
        this.$router.push(`/all/detail/${this.id}/submitOrder`);
      } else {
        this.$toast("您未选中商品");
      }
    }
  },
  created() {
    this.tmpArr = this.tmpSelectedPosition;
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff1268;
$padding: 40px;

.scrollContent {
  background-color: #f8f8f8;
  position: absolute;
  top: 154px;
  left: 0;
  bottom: 172px;
  width: 100%;

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
    // 已经被选中的座位
    .selected {
      background-color: $mainColor;
    }
    .active {
      background-color: rgb(76, 160, 76);
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
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    .seletedInfo {
      color: $mainColor;
      font-size: 40px;
      margin-bottom: 10px;
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