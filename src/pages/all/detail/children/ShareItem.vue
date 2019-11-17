<template>
  <div class="share-item">
    <div class="imgWrap">
      <img :src="item.picUrl"/>
    </div>
    <p class="name">{{item.name}}</p>
  </div>
</template>
<script>
export default {
  name: 'share-item',
  components: {},
  props: {
    item: {
      type: Object,
      default: {}
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
<style lang="scss" scoped>
.share-item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .imgWrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .name {
    font-size: 30px;
    color: #444;
    margin-top: 10px;
  }
}
</style>