<!--  -->
<template>
  <div class="">
      <product-step></product-step>
      <product-basic></product-basic>
      <product-sale></product-sale>
  </div>
</template>
<script>
import productStep from '@/components/productStep';
import productSale from '@/components/productSale';
import productBasic from '@/components/productBasic'

export default {
  components: {
    productStep,
    productSale,
    productBasic,
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
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
