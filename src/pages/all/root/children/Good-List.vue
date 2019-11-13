<template>
<div class="goodList">
  <app-good-item v-for="good in goodsListArr" :key="good.id" :good="good" class="app-good-item" />
</div>
</template>

<script>
import GoodItem from "../../../../components/app-good-item";
export default {
  name: "good-list",
  components: {
    [GoodItem.name]: GoodItem
  },
  props: {
    goodsListArr: {
      type: Array,
      default: []
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

<style lang="scss">
.app-good-item {
  margin: 39px 0;
}
</style>