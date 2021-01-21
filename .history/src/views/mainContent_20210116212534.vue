<!--  -->
<template>
  <div :class="{ mainContentWrapper: true, 'menu-unfold': $store.state.collapsed }">
    <div class="headWrapper">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <div class="breadcrumb">
        <template>
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
          </a-breadcrumb>
        </template>
      </div>
      <ul class="userInfo">
        <li> {{$store.state.userInfo.username}}</li>
        <li>退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
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
