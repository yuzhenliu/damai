<template>
  <div class="video-item">
    <div class="videoWrap">
      <div class="mask" @click="watchVideo">
        <van-icon name="play-circle" />
      </div>
    </div>
    <h6 class="tit">这是标题啊</h6>
  </div>
</template>

<script>
export default {
  name: "video-item",
  components: {
  },
  props: {
    videoId: {
      type: [Number, String],
      default: 0,
    }
  },
  data() {
    return {};
  },
  methods: {
    // 跳转到视频页面
    watchVideo() {
      this.$router.push(`/find/video/${this.videoId}`);
    }
  }
};
</script>

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;

.video-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 30px;

  .videoWrap {
    width: 100%;
    flex: 7;
    background: url('../../../../assets/find/8.jpg') no-repeat center center;
    background-size: 100%, 100%;
    border-radius: 30px 30px 0 0;
    position: relative;

    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 36;
      opacity: 0.5;

      .van-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
      }
    }
  }
  .tit {
    box-sizing: border-box;
    padding: 30px;
    flex: 3;
    text-align: left;
    text-indent: 10px;
    color: #333;
    overflow: hidden;
  }
}
</style>