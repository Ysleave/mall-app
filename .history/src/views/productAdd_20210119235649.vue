<!--  -->
<template>
  <div class="">
    <a-steps :current="current">
      <a-step
        v-for="item in stepsList"
        :key="item.id"
        :title="item.title"
      ></a-step>
    </a-steps>
    <product-basic></product-basic>
    <product-sale></product-sale>
  </div>
</template>
<script>
import productStep from "@/components/productStep";
import productSale from "@/components/productSale";
import productBasic from "@/components/productBasic";

export default {
  components: {
    productStep,
    productSale,
    productBasic,
  },
  data() {
    return {
      stepsList: [
        { title: "填写商品基本信息", id: "1" },
        { title: "填写商品销售信息", id: "2" },
      ],
      current: "1",
    };
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
//@import url(); 引入公共css类
</style>
