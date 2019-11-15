<template>
  <div class="search-history">
      <div class="search-history-head">
          <span>搜索历史</span>
          <van-icon name="delete" class="delete" @click="deleteHistory" />
      </div>
      <ul class="search-history-list" >
          <li class="item" v-for="(item,index) in historyList" :key='index' @click="searchAction(item)">
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
    },
    data(){
        return{
            DhistoryList:[]
        }
    },
    methods:{
        deleteHistory(){
            // this.historyList=[];
        },
        searchAction(item){
            this.$emit('sendSearchKey',item,'history');
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
        display: flex;
        flex-wrap: wrap;
        margin-top:60px;    
        .item{
            padding:35px 45px;
            font-size: 40px;
            box-shadow: 6px 6px 12px 0px #eee;
            margin-left:30px;
        }
    }
}
</style>