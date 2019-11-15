<template>
  <div class="search-history">
      <div class="search-history-head">
          <span>搜索历史</span>
          <van-icon name="delete" class="delete"/>
      </div>
      <ul class="search-history-list" >
          <li class="item" v-for="(item,index) in historyList" :key='index'>
          <span>{{item}}</span>

          </li>

      </ul>
  </div>
</template>

<script>
export default {
    name:'search-history',
    props:{
        historyList:{
            type:Array
        }
    }

}
</script>

<style lang="scss" scoped>
.search-history{
    padding-top:100px;
    &-head{
        font-weight: bold;
        font-size: 50px;
        position: relative;
        .delete{
            position: absolute;
            right:0;
            top:50%;
            transform: translateY(-50%);
        }
    }
    &-list{
        
    }
}
</style>