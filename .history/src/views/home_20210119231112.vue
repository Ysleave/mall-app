<!-- 页面根组件 -->
<template>
  <div class="home">
    <leftMenu :key="key"/>
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
    return {
      key:new Date().getTime()
    };
  },
  watch:{
    $route:
  }
};
</script>
<style lang="less">
// @import url("~@/assets/css/home.less"); //引入公共css类
.home {
  .menu-list {
    width: 180px;
    position: fixed;
    height: 100%;
    .ant-menu {
      height: 100%;
    }
  }
  .mainContentWrapper {
    margin-left: 180px;
    transition: all 0.3s;
    font-size: 16px;
    &.menu-unfold {
      margin-left: 80px;
    }
    .headWrapper {
      height: 60px;
      line-height: 60px;
      padding-left: 10px;
      padding-right: 20px;
      border-bottom: 1px solid #eee;
      .breadcrumb {
        display: inline-block;
        margin-left: 20px;
      }
      .userInfo {
        float: right;
        cursor: pointer;
        text-align: center;
        li:not(:first-child) {
          display: none;
          &:hover {
            background-color: #eee;
            color: #999;
            font-weight: 700;
          }
        }
        li {
          padding: 0px 20px;
        }
        &:hover {
          li {
            display: block;
          }
        }
      }
    }
  }
}
</style>
