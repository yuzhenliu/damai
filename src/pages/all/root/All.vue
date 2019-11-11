<template>
  <div class="page-wrap">
    <!-- 首页 -->
    <div class="page" id="all">
      <app-header title="全部" hasBack></app-header>
      <app-scroll class="content">
      </app-scroll>
    </div>

    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import commonService from '../../../services/commonService'
import allService from '../../../services/allService'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>