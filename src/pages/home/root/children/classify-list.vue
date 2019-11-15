<template>
  <ul class="classfiy-list">
    <li v-for="item in list" :key="item.classify_id" :data-id="item.classify_id" @click="toClassifyAction(item.classify_id)">
      <div class="classfiy-list-img">
          <img :src="item.picUrl" :alt="item.name" />
      </div>
      
      <span>{{ item.name }}</span>
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
    },
    toClassifyAction(id){
      console.log(id);
      this.$router.push(`/all/${id}`);
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
    display: flex;
    flex-direction: column;
    text-align: center;
    .classfiy-list-img {
      width: 100%;
      text-align: center;
      img {
        width: 90px;
        height: 90px;
        display: inline-block;
      }
    }

    span {
      margin-top: 20px;
    }
  }
}
</style>
