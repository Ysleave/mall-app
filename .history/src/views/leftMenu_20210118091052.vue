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
        <a-sub-menu  :key="menus.name">
          <span slot="title"><a-icon type="mail" /><span>{{menus.meta.title}}</span></span>
          <a-menu-item key="5">
            Option 5
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
