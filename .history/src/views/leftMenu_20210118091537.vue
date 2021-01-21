<template>
    <div class="menu-list">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
       <template v-for="menus in $store.state.menuRouter">
        <a-sub-menu  :key="menus.name" v-if="menus.meta.isHidle">
          <span slot="title"><a-icon type="mail" /><span>{{menus.meta.title}}</span></span>
          <a-menu-item v-for="child in menus.children" :key="child.name">
            {{child.meta.title}}
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
};
</script>
<style></style>
