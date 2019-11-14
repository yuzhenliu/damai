<template>
  <div class="search-top">
      <div class="search-top-inp">
        <van-icon name="search" class="search-top-inp-icon"/>
        <input placeholder="搜索明星、演出比赛、场馆" @keyup.enter='searchAction' type="text" />
    </div>
    <div class="cancel" @click="backAction">
        取消
    </div>
  </div>
</template>

<script>
export default {
    name:'search-top',
    methods:{
        backAction(){
            this.$router.back();
        },
        searchAction(ev){
            if(ev.srcElement.value==''){
                this.$toast('输入不能为空');
            }
            this.$emit('sendSearchKey',ev.srcElement.value);
            ev.srcElement.value='';
        }
    }
}
</script>

<style lang="scss" scoped>
.search-top{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 154px;
        display: flex;
        line-height: 154px;
        background: #fff;
        padding: 0 40px;
        box-sizing: border-box;
        &-inp{
            flex:1;
            height:93px;
            font-size:30px;
            display: flex;
            margin:30px 0;
            padding-left:30px;
            line-height: 93px;
            background: linear-gradient(to right,#fff3e7,#ffeaf3,#f3effd);
            border-radius:46px 46px 46px 0;
            padding-left:40px;
            input{
                height:100%;
                flex: 1;
                font-size: 40px;
                color:#9c9ca4;
                border:none;
                background: transparent;
            }
            &-icon{
                font-size: 50px;
                color:#222;
                display: block;
                line-height: 93px;
                margin-right:10px;
            }
  }
  .cancel{
      padding:0 40px;
      font-size: 45px;
  }
}
</style>