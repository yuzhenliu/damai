<template>
  <div class="index-bar" ref="bar" @touchstart="barDrag">
    <div
      class="index-bar__index"
      ref="bar_index"
      v-for="(item, index) in indexList"
      :key="index"
      :data-index="index"
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
  data(){
    return{
      indexBarLen:0
    }
  },
  methods: {
    addClassHandle(classN, index) {

      this.$refs.bar_index[index].classList.add(classN);
    },
    removeClassHandle(classNList, index) {
      classNList.forEach(classN => {
        this.$refs.bar_index[index].classList.remove(classN);
      });
    },
    classListHandle(nowIndex){
        this.addClassHandle("index-bar__index_active", nowIndex);
        this.removeClassHandle(["index-bar__index_active_1","index-bar__index_active_2"], nowIndex);

        if((nowIndex + 1)<=(this.indexBarLen-1)){
          this.addClassHandle("index-bar__index_active_1",nowIndex + 1);
          this.removeClassHandle( ["index-bar__index_active","index-bar__index_active_2"],nowIndex + 1);
          
        }
         if((nowIndex-1)>=0){
          this.addClassHandle("index-bar__index_active_1",nowIndex - 1);
          this.removeClassHandle( ["index-bar__index_active","index-bar__index_active_2"],nowIndex - 1);
        }
        
        if((nowIndex + 2)<=(this.indexBarLen-1)){
          this.addClassHandle("index-bar__index_active_2",nowIndex + 2);
          this.removeClassHandle( ["index-bar__index_active","index-bar__index_active_1"],nowIndex + 2);
        }
        if((nowIndex-2)>=0){
          this.addClassHandle("index-bar__index_active_2", nowIndex - 2);
          this.removeClassHandle(["index-bar__index_active","index-bar__index_active_1"], nowIndex - 2);
        }
        if((nowIndex + 3)<=(this.indexBarLen-1)){
          this.removeClassHandle(["index-bar__index_active_1","index-bar__index_active","index-bar__index_active_2"],nowIndex + 3);
        }
        if((nowIndex-3)>=0){
          this.removeClassHandle(["index-bar__index_active_1","index-bar__index_active","index-bar__index_active_2"], nowIndex - 3);
        }

    },
    barDrag(ev) {
      var _this = this;
      var $index_bar = this.$refs.bar_index;
      var $barIndexH = $index_bar[0].clientHeight;

      var touch = ev.changedTouches[0];

      var beginIndex = touch.target.getAttribute("data-index"); //获取起始的index
      var beginY = touch.clientY;   //其实y的位置

      this.$emit("indexBarHandel", beginIndex);

      function moveEvent(ev) {
        var touch = ev.changedTouches[0];

        var nowIndex = Math.round((touch.clientY - beginY) / $barIndexH) +parseInt(beginIndex);  //计算手指拖动到哪个位置

        _this.indexBarLen= $index_bar.length;
        
        if (nowIndex <= 0) {
          nowIndex = 0;
        }else if (nowIndex >=_this.indexBarLen - 1) {
          nowIndex = _this.indexBarLen - 1;
        }

        _this.classListHandle(nowIndex);

        _this.$emit("indexBarHandel", nowIndex);
      }
      document.addEventListener("touchmove", moveEvent);
      document.addEventListener("touchend", function(ev) {
        // 触摸离开，将move事件移出
        document.removeEventListener("touchmove", moveEvent);
        $index_bar.forEach(item => {
          item.className='index-bar__index'
        });
      });
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
  height: 85%;
  &__index {
    padding: 0 14px 0 56px;
    font-size: 40px;
    line-height: 49px;
    font-weight: 500;
    flex: 1;
    // line-height: 200%;
    color: #289bf6;
    transform: all 0.5s ease;
  }
  &__index_active {
    font-size: 90px;
    // padding-right: 300px;
    transform:translateX(-220px); 
    transform: all 0.5s ease;
  }
  &__index_active_1 {
    // padding-right: 250px;
    transform:translateX(-170px); 
    font-size: 80px;
    color:#bde0fc;
    transform: all 0.5s ease;
  }
  &__index_active_2 {
    // padding-right: 80px;
    transform:translateX(-80px); 
    font-size: 60px;
    color:#79b8ee;
    transform: all 0.5s ease;
  }
}
</style>
