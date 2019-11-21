<template>
  <div class="page-wrap">
    <div class="page subpage video-page">
      <app-header title="视频" hasBack />
      <div class="content">
        <div class="videoWrap">
          <video src="../../../assets/find/one.mp4" muted controls></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "video-page",
};
</script>

<style lang="scss" scoped>
.video-page {
  .content {
    background-color: rgba(0, 0, 0, .9);

    .videoWrap {
      width: 100%;
      height: 600px;

      video {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>