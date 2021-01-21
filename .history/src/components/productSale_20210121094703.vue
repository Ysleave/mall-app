<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="商品售价" prop="price" required>
      <a-input v-model="form.price" />
    </a-form-model-item>
    <a-form-model-item label="商品折扣价" prop="price_off">
      <a-input v-model="form.price_off"/>
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="unit">
       <a-input v-model="form.unit"/>
    </a-form-model-item>
    <a-form-model-item label="计量单位" prop="inventory">
       <a-input v-model="form.inventory"/>
    </a-form-model-item>
    <a-form-model-item label="商品相册" prop="images">
     
    </a-form-model-item>
    <a-form-model-item label="" :wrapperCol="{ span: 24 }" >
      <a-button type="primary" @click="next">下一步</a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { apigetcategory } from "@/service/api/category.js";

export default {
  props: ["form"],
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      rules: {

      },
      categoryList: [],
      categoryCTimesList: [],
    };
  },
  created() {
    apigetcategory().then((res) => {
      this.categoryList = res.data.data;
    });
  },
  methods: {
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
          this.$emit('next')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
