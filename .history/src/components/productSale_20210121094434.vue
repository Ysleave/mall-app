<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="商品售价" prop="title" required>
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="商品折扣价" prop="desc">
      <a-input v-model="form.desc"/>
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="category">
      <a-select v-model="form.category" @change="selectChange">
        <a-select-option
          v-for="list in categoryList"
          :key="list.id"
          :value="list.id"
        >
          {{ list.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_items">
        <a-select-option v-for="c in categoryCTimesList" :key="c" :value="c">
          {{ c }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="计量单位" prop="tags">
      <a-select
        mode="tags"
        placeholder="Please select"
        :default-value="['包邮，昨晚次日到']"
        v-model="form.tags"
      >
        <a-select-option value="包邮，昨晚次日到">
          包邮，昨晚次日到
        </a-select-option>
      </a-select>
    </a-form-model-item>
     <a-form-model-item label="计量单位" prop="tags">
      <a-select
        mode="tags"
        placeholder="Please select"
        :default-value="['包邮，昨晚次日到']"
        v-model="form.tags"
      >
        <a-select-option value="包邮，昨晚次日到">
          包邮，昨晚次日到
        </a-select-option>
      </a-select>
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
