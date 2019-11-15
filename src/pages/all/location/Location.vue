<template>
  <div class="page-wrap">
    <div class="page subpage" id="location">
      <app-header title="定位" hasBack></app-header>
      <div class="content">
        <div id="allmap"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "location",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    // 创建Map实例
    var map = new BMap.Map("allmap");

    // 初始化地图,设置中心点坐标和地图级别
    var center = new BMap.Point(113.83285852254814, 22.62928283248061);
    map.centerAndZoom(center, 11);

    //添加地图类型控件
    var control = new BMap.MapTypeControl({
      mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP]
    });

    map.addControl(control);

    // 百度地图API功能
    var marker = new BMap.Marker(center); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_DROP); //跳动的动画
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }
};
</script>

<style lang="scss" scoped>
#location {
  .content {
    #allmap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family:"微软雅黑";
    }
  }
}
</style>