<!-- 页面根组件 -->
<template>
  <div class="home">
    <div class="leftmenuWrapper">
      <leftMenu></leftMenu>
    </div>
    <mainContent />
  </div>
</template>

<script>
import leftMenu from "@/views/leftMenu";
import mainContent from "@/views/mainContent";
export default {
  components: {
    leftMenu,
    mainContent,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less">
// @import url("~@/assets/css/home.less"); //引入公共css类
.home {
  .leftmenuWrapper {
    .menu-list {
      width: 180px;
      position: fixed;
      height: 100%;
      .ant-menu {
        height: 100%;
      }
    }
  }
  .mainContentWrapper {
    margin-left: 180px;
    transition: all 0.3s;
    &.menu-unfold {
      margin-left: 80px;
    }
    .headWrapper {
      height: 80px;
      line-height: 80px;
      padding-left: 10px;
      padding-right: 20px;
      border-bottom: 1px solid #eee;
      .breadcrumb {
        display: inline-block;
        margin-left: 20px;
      }
      .userInfo{
        float: right;
        cursor: pointer;
        text-align: center;
        li:not(:first-child){
           display: none;
        }
        &:hover{
          display: block;
        }
      }
    }
  }
}
</style>
