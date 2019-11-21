<template>
  <div class="video-list">
    <tit :title="title" :btnInfo="btnInfo" />
    <div class="list">
      <div class="list-item">
        <video-item />
      </div>
      <div class="list-item">
        <video-item />
      </div>
      <div class="list-item">
        <video-item />
      </div>
      <div class="list-item">
        <video-item />
      </div>
    </div>
  </div>
</template>

<script>
import Tit from "./Tit";
import VideoItem from "./Video-Item";
export default {
  name: "video-list",
  components: {
    [Tit.name]: Tit,
    [VideoItem.name]: VideoItem
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    btnInfo: {
      type: String,
      default: ""
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

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;

.video-list {
  .list {
    display: flex;
    margin-top: 10px;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;

    .list-item {
      width: 46%;
      height: 500px;
      margin: 14px 0;
      border-radius: 30px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }
  }
}
</style>