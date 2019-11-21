<template>
  <div class="tit">
    <h3 class="title">{{title}}</h3>
    <div class="right">
      <span class="rightBtn">{{btnInfo}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tit',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    btnInfo: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;

.tit {
  width: 100%;
  height: 160px;
  background-color: #eee;
  box-sizing: border-box;
  padding: $padding;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #333;
    font-size: 60px;
    font-weight: bold
  }

  .right {
    .rightBtn {
      padding: 20px 36px;
      background-color: $mainColor;
      color: #fff;
      border-radius: 40px;
      font-size: 34px;
    }
  }
 
}
</style>