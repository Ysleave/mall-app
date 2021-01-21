<template>
  <div id="app" class="wrapper">
    <home/>
    <router-view></router-view>
  </div>
</template>
<script>
import home from '@/views/home'
export default {
  components:{
    home
  },
}
</script>