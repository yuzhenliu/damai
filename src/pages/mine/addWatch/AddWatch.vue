<template>
  <div class="page-wrap">
    <div class="page subpage" id="addWatch">
      <app-header title="请填写观演人信息" hasBack>
        <span slot="right-btn" class="right-text" @click="saveAction">保存</span>
      </app-header>
      <div class="content">
  <van-field
    v-model="username"
    clearable
    label="用户名"
    placeholder="请输入姓名"
  />

  <van-field
    v-model="idCard"
    clearable
    label="证件号码"
    placeholder="请输入证件号码"
  />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Field } from 'vant'
export default {
  name: 'addWatch',
  components: {
    [Field.name]: Field,
  },
  data() {
    return {
      username: '',
      idCard: '',
    }
  },
  computed: {
    ...mapState({
      observerArr: state => state.observerArr
    })
  },
  methods: {
    // 保存观演人信息
    saveAction() {

    }
  }
};
</script>

<style scoped lang="scss">
$mainColor: #ff1268;
$padding: 40px;


</style>