<!--  -->
<template>
  <div class="mainContentWrapper">
    <div class="headWrapper">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <div class="breadcrumb">
        面包屑
      </div>
      <div class="userInfo">
        用户信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('')
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
