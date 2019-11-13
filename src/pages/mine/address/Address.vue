<template>
  <div class="page" id="address">
    <app-header title="我的订单" :hasBack="true"></app-header>
    <app-scroll class="dd_center">
      <h1>票价页面</h1>
    </app-scroll>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#address {
  z-index: 90;
  background: #fff;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
