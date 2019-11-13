<template>
  <div class="index-cell" ref="cell">
    <div class="index-anchor">{{ item.prefix }}</div>
    <div class="index-cell-list">
      <div
        class="index-cell-item"
        v-for="subitem in item.cities"
        :title="subitem.name"
        :key="subitem.cityid"
      >
        {{ subitem.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index-cell",
  props: {
    item: {
      type: Object
    }
  },
  created() {
  },
  mounted(){
    this.$emit('indexCellHandle',this.$refs.cell.offsetTop);
  }
};
</script>

<style lang="scss" scoped>
.index-cell {
  .index-anchor {
    padding: 0 56px;
    font-size: 50px;
    line-height: 112px;
    background: #f2f3f4;
  }
  &-item {
    padding: 35px 56px;
    overflow: hidden;
    color: #323233;
    font-size: 49px;
    line-height: 84px;
    background-color: #fff;
  }
}
</style>
