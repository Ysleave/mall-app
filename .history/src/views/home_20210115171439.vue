<!-- 页面根组件 -->
<template>
<div class='home'>
   <div class="leftmenuWrapper">
       <leftMenu></leftMenu>
   </div>
    <mainContent/>

</div>
</template>

<script>
import leftMenu from '@/views/leftMenu'
import mainContent from '@/views/mainContent'
export default {
components: {
  leftMenu,
  mainContent
},
data() {
return {

};
},
computed: {},
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
   .leftmenuWrapper{
     .menu-list{
       width: 180px;
       position: fixed;
       height: 100%;
       .ant-menu .ant-menu-inline .ant-menu-root .ant-menu-dark{
         height: 100%;
       }
     }
   }
   .mainContentWrapper{
     margin-left:180px
   }
</style>