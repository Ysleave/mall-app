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
            <a-breadcrumb-item>{{currentRoutes[0].meta.title}}</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">{{currentRoutes[1].meta.title}}</a></a-breadcrumb-item>
          </a-breadcrumb>
        </template>
      </div>
      <ul class="userInfo">
        <li> {{$store.state.userInfo.username}} <a-icon type="down" /></li>
        <li @click="logout">退出</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: { },
  data(){
    return{
      currentRoutes:[],
    }
  },
  watch:{
    $route:{
       handler:function(){
          this.currentRoutes = this.$router.currentRoute.matched
       },
       immediate:true
    }
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
    },
    logout(){
      this.$store.dispatch("commitLogout");
      this.$router.push({
        name:"login"
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
