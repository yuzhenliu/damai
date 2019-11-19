<template>
  <div class="page-wrap">
    <div class="page subpage" id="addWatch">
      <app-header title="请填写观演人信息" hasBack>
        <span slot="right-btn" class="right-text" @click="saveAction">保存</span>
      </app-header>
      <div class="content">
        <div class="van-cell">
          <label for="name">姓名</label>
          <input type="text" id="name" placeholder="请输入姓名" ref="name">
        </div>
        <div class="van-cell">
          <label for="idCard">证件类型</label>
          <div class="van-content" @click="checkIdCardAction">
            <span>{{idCardTypeDefault}}</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="van-cell">
          <label for="idCard">证件号码</label>
          <input type="text" id="idCard" placeholder="请输入证件号码" ref="idCard">
        </div>
        <van-popup
          v-model="showIdCard"
          position="bottom"
          :style="{ height: '26%' }"
        >
        <!-- 顶部的两个选项 -->
        <div class="top">
          <span class="cancle" @click="cancle">取消</span>
          <span class="saveIdType" @click="saveIdType">保存</span>
        </div>
        <div class="bottom">
          <ul class="idCardList">
            <li v-for="(item, index) in idCardTypeArr" :key="index" class="list-item" :class="{active: activeIndex == index}" @click="chooseIdCardTypeAction(index)">{{item}}</li>
          </ul>
        </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Field, Popup  } from "vant";
export default {
  name: "addWatch",
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup
  },
  data() {
    return {
      username: "",
      idCard: "",
      showIdCard: false,
      idCardTypeArr: ['身份证', '港澳居民来往内地通行证', '台湾居民来往大陆通行证', '护照'],
      activeIndex: 0,
      idCardTypeDefault: '身份证'
    };
  },
  computed: {
    ...mapState({
      observerArr: state => state.observerArr
    }),
    idCardType() {
      return this.idCardTypeArr[this.activeIndex];
    },
  },
  methods: {
    // 保存观演人信息
    saveAction() {
      // 获取到输入的值，进行判断,是否为空
      // 跳转到刚刚的页面
      let name = this.$refs.name.value;
      let idCard = this.$refs.idCard.value;
      let idCardType = this.idCardTypeDefault;
      let nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
      let idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
      if(!name) {
        this.$toast('姓名不能为空');
        return;
      }
      if(!idCard) {
        this.$toast('证件号码不能为空');
        return;
      }
      if(!nameReg.test(name)){
        this.$toast('姓名格式错误');
        return;
      }
      if(!idCardReg.test(idCard)){
        this.$toast('证件号码格式错误');
        return;56
      }
      // 刘喧 360721199612111225 身份证
      this.$store.commit('setobserverArr', {
        name,
        idCard,
        idCardType
      });
      this.$router.back();
    },
    // 获取身份类型
    checkIdCardAction() {
      this.showIdCard = true;
    },
    // 选择类型
    chooseIdCardTypeAction(index) {
      this.activeIndex = index;
    },
    // 点击取消
    cancle() {
      this.showIdCard = false;
    },
    // 点击保存
    saveIdType() {
      this.idCardTypeDefault = this.idCardType;
      this.showIdCard = false;
    }
  }
};
</script>

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;

.van-cell {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  line-height: 160px;
  height: 160px;
  padding: 20px 30px;
  margin-top: 10px;
  border-bottom: 1px solid #eee;

  .van-content {
    display: flex;
    flex-direction: row;
    flex: 7;
    line-height: 120px;
    height: 120px;
    box-sizing: border-box;
    vertical-align: middle;
    color: #444;
    font-size: 50px;
    align-items: center;
    justify-content: space-between;

    span {
      flex: 1;
    }
    .van-icon {
      width: 120px;
      height: 120px;
      text-align: center;
      line-height: 120px;
    }
  }

  label {
    flex: 3;
    line-height: 120px;
    height: 120px;
    vertical-align: middle;
    color: #444;
    font-size: 50px;
  }
  input {
    flex: 7;
    outline: none;
    border: none;
    line-height: 120px;
    height: 120px;
    box-sizing: border-box;
    vertical-align: middle;
    color: #444;
    caret-color: $mainColor;
    font-size: 50px;
  }
}
// 弹出层
.van-popup {
  width: 100%;
  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;

    .cancle {
      width: 100px;
      height: 100px;
    }
    .saveIdType {
      color: $mainColor;
      width: 100px;
      height: 100px;
    }
  }
  .bottom {
    width: 100%;
    flex: 1;
    padding: $padding;
    box-sizing: border-box;

    .idCardList {
      width: 100%;
      height: 100%;
      overflow: auto;

      .list-item {
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #666;
      }
      .active {
        color: $mainColor;
      }
    }

  }
}

</style>