<!--  -->
<template>
  <div class="productWrapper">
    <productSearch @submit="searchHander"/>
  </div>
</template>
<script>
import productSearch from '@/components/productSearch'

export default {
  components: {
    productSearch
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    searchHander(val){
        console.log(val);
    }
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
