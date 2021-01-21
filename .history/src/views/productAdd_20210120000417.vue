<!--  -->
<template>
  <div class="">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.id" :title="item.title"></a-step>
    </a-steps>
    <div class="steps-content">
      <product-basic></product-basic>
      <product-sale></product-sale>
    </div>
  </div>
</template>
<script>
import productSale from "@/components/productSale";
import productBasic from "@/components/productBasic";

export default {
  components: {
    productSale,
    productBasic,
  },
  data() {
    return {
      steps: [
        { title: "填写商品基本信息", id: "1",  },
        { title: "填写商品销售信息", id: "2",  },
      ],
      current: 0,
    };
  },
  computed: {},
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less">
//@import url(); 引入公共css类
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
