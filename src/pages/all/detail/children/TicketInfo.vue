<template>
  <div class="ticketInfo border-bottom">
    <div class="left">
      <h6 class="title text-center-align">{{title}}</h6>
      <p class="info text-center-align">{{info}}</p>
    </div>
    <div class="right text-center">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket-info",
  components: {},
  props: {
    title: {
      type: String
    },
    info: {
      type: String
    }
  },
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

.ticketInfo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    .title {
      flex: 1;
      font-size: 40px;
      color: #444;
      font-weight: bold;
    }
    .info {
      flex: 1;
      font-size: 38px;
      color: #999;
    }
  }

  .right {
    width: 178px;
    height: 100%;

    .van-icon {
      font-size: 56px;
      color: #333;
    }
  }
 
}
</style>