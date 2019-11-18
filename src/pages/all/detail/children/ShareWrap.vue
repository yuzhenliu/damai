<template>
  <div class="shareWrap">
    <share-item v-for="(item, index) in shareArr" :key="index" :item="item" class="share-item"/>
  </div>
</template>
<script>
import ShareItem from './ShareItem'
export default {
  name: 'share-wrap',
  components: {
    [ShareItem.name]: ShareItem,
  },
  props: {},
  data() {
    return {
      shareArr: [
        {
          picUrl: require('../../../../assets/logo.png'),
          name: '微信'
        },
        {
          picUrl: require('../../../../assets/logo.png'),
          name: '朋友圈'
        },
        {
          picUrl: require('../../../../assets/logo.png'),
          name: 'QQ好友'
        },
        {
          picUrl: require('../../../../assets/logo.png'),
          name: '微博'
        },
        {
          picUrl: require('../../../../assets/logo.png'),
          name: '钉钉'
        },
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
$padding: 40px;


.shareWrap {
  display: flex;
  flex-direction: row;
  padding: $padding;
  box-sizing: border-box;
  position: relative;

  .share-item {
    flex: 1;
    height: 150px;
    overflow: hidden;
  }
}
</style>