<template>
  <ul class="classfiy-list">
    <li v-for="item in list" :key="item.classfiy_id">
      <img :src="item.picUrl" :alt="item.name" />
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
import commonService from "../../../../services/commonService";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async initData() {
      const { list } = await commonService.requestClassify();
      this.list = list;
      console.log(list);
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
.classfiy-list {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;
  li {
    width: 20%;
    text-align: center;
    margin-bottom: 50px;
    img {
      width: 90px;
      height: 90px;
      display: inline-block;
    }
    span {
      margin-top: 20px;
      display: inline-block;
    }
  }
}
</style>