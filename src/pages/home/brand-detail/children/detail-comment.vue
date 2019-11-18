<template>
  <div class="detail-comment">
    <div class="switch">
      <i ref="block"></i>
      <div class="switch-btn" @click="toggleAction">
        <span class="active" data-index="0">全部</span>
        <span data-index="1">官方</span>
      </div>
    </div>

    <div class="list">
     <app-comment-item v-for="(item, index) in commentList"
      :key="index" :item='item'></app-comment-item>
    </div>
  </div>
</template>

<script>

import appCommentItem from '../../../../components/app-comment-item'
export default {
  name: "brand-detail-comment",
  components: {
    [appCommentItem.name]:appCommentItem
  },
  props: {
    commentList: {
      type: Array
    }
  },
  data() {
    return {
      value: Number
    };
  },
  methods: {
    toggleAction(ev) {
      var target = ev.target;
      let index = parseInt(target.getAttribute("data-index"));
      this.$refs.block.style.left = target.clientWidth * index + "px";
      target.parentNode.childNodes.forEach(element => {
        element.classList.remove("active");
      });
      target.classList.add("active");
    }
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
.detail-comment {
  padding: 40px;
  .switch {
    width: 300px;
    height: 80px;
    border-radius: 40px;
    background: #f2f2f2;
    color: #afafaf;
    position: relative;
    &-btn {
      display: flex;
      span {
        flex: 1;
        text-align: center;
        line-height: 80px;
        z-index: 0;
        position: relative;
        &.active {
          color: #000;
        }
      }
    }
    i {
      position: absolute;
      width: 50%;
      height: 100%;
      border-radius: 40px;
      background: #fff;
      border: 3px solid #d5d5d5;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }
  }


}
</style>
