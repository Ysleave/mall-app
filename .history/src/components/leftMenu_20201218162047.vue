<template>
  <div>
    <div class="left-menu">
        <dl id="menu">
            <dt class="tit">管理</dt>
            <router-link tag="dd" to="/stu_list">列表</router-link>
            <!-- <router-link tag="dd" to="/add_stu">新增学生</router-link> -->
        </dl>
    </div>
    <div class="right-content">
        <router-view></router-view>     
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style>
.tit{
  color: #b3bcc5;
}
</style>
