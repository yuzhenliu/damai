<template>
  <div class="index-bar">
    <div
      class="index-bar__index"
      v-for="(item, index) in indexList"
      :key="index"
      @click="barClickHandle(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "index-bar",
  props: {
    indexList: {
      type: Array
    }
  },
  methods:{
      barClickHandle(index){
          this.$emit('indexBarHandel',index);
      }
  }
};
</script>

<style lang="scss" scoped>
.index-bar {
  position: fixed;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translateY(-50%);
  z-index: 2;
  &__index {
    padding: 0 14px 0 56px;
    font-size: 40px;
    line-height: 49px;
    font-weight: 500;
  }
  &__index_active{
      color:#ddd;
  }
}
</style>


