<template>
  <div class="app-scroll" ref="scroll">
    <div class="scoll-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "app-scroll",
  props: {
    scrollY: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 刷新页面
    refresh() {
      this.scroll.on("beforeScrollStart", () => {
        this.scroll.refresh();
      });
    },
    // 滚动一定距离
    scrollBy(x, y) {
      this.scroll.scrollBy(x, y, 1, 'linear');
    }
  },
  mounted() {
    // 创建滚动视图
    this.scroll = new BScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      scrollY: this.scrollY,
      scrollX: this.scrollX,
      probeType: 3,
      bounce: this.bounce
    });
    // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
    this.scroll.on("beforeScrollStart", () => {
      this.scroll.refresh();
    });

    // console.log(this.scroll)
  }
};
</script>

<style scoped>
.app-scroll {
  overflow: hidden;
}
</style>