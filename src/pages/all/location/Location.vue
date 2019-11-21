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
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          alert("您的位置：" + r.point.lng + "," + r.point.lat);
        } else {
          alert("failed" + this.getStatus());
        }
      },
      { enableHighAccuracy: true }
    );
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
      font-family: "微软雅黑";
    }
  }
}
</style>