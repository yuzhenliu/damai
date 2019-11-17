<template>
  <div class="page-wrap">
    <div class="page subpage" id="watch">
      <app-header title="常用观演人" hasBack></app-header>
      <div class="content">
        <app-scroll class="watchScroll">
          <observe-item v-for="item in observerArr" :key="observerArr.idCard" :observeInfo="item"/>
        </app-scroll>
        <!-- 新增 -->
        <div class="addObserve" @click="toAddObserve">
          <span>添加新观演人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Observe from './children/Observe'
export default {
  name: 'watch',
  components: {
    [Observe.name]: Observe
  },
  computed: {
    ...mapState({
      observerArr: state => state.observerArr
    })
  },
  methods: {
    // 添加观演人
    toAddObserve() {
      this.$router.push('/mine/addWatch');
    }
  }
};
</script>

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;

#watch {
  .content {
    background-color: #eee;

    .watchScroll {
      position: absolute;
      top: 0;
      bottom: 154px;
      left: 0;
      width: 100%;
    }

    // 新增观演人
    .addObserve {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 154px;
      box-sizing: border-box;
      padding: 20px;
      background-color: #fff;
    
      span {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 100%;
      background-image: linear-gradient(to right, #ff1199, $mainColor);
      color: #fff;
      text-align: center;
      font-size: 50px;
      line-height: 122px;
      border-radius: 20px;
    }
  }
  }
}
</style>