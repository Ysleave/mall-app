<template>
    <div class="menu-list">
      <a-menu
        :default-selected-keys="[$router.currentRoute.matched[1] ? $router.currentRoute.matched[1].name : '']"
        :default-open-keys="[$router.currentRoute.matched[0].name]"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
       <template v-for="menus in $store.state.menuRouter">
        <a-sub-menu  :key="menus.name" v-if="!menus.meta.isHidle">
          <span slot="title">
            <a-icon :type="menus.meta.icon" /><span>{{menus.meta.title}}</span>
          </span>
          template
          <a-menu-item v-for="child in menus.children" :key="child.name">
            <router-link :to="{name:child.name}"> <a-icon :type="child.meta.icon" /> {{child.meta.title}}</router-link>
          </a-menu-item>
        </a-sub-menu>
       </template>
      </a-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  created(){
  }
};
</script>
<style></style>
