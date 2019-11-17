<template>
  <div class="observe">
    <div class="left">
      <span class="name">{{observeInfo.name | replaceFirstname}}</span>
      <span class="idCard">身份证&nbsp;&nbsp;&nbsp;&nbsp;{{observeInfo.idCard | replaceIdCard}}</span>
    </div>
    <div class="right">
      <van-icon name="delete" @click="deleteAction"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'observe-item',
  props: {
    observeInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {}
  },
  methods: {
    // 删除观演人
    deleteAction() {
      this.$store.commit('deleteobserverArr', this.observeInfo.idCard);
    },
  },
  filters: {
    // 去掉姓氏
    replaceFirstname(str) {
      let tmpStr = str.substr(1, str.length-1);
      return '*' + tmpStr
    },
    // 隐藏部分身份信息
    replaceIdCard(str) {
      let beginStr = str.substr(0, 3);
      let endStr = str.substr(str.length-4, 3);
      return beginStr + '************' + endStr;
    }
  }
};
</script>

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;

.observe {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  margin: $padding 0;
  padding: $padding;
  justify-content: space-between;
  align-items: center;

.left {
  display: flex;
  flex-direction: column;
  .name {

  }
  .idCard {
    margin-top: 30px;
    color: #666;
  }
}
.right {}
}
</style>