<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="副标题" ref="title" prop="title">
      <a-input v-model="form.title"
        @blur="() => {$refs.title.onFieldBlur();}"
      />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input
        v-model="form.desc"
        @blur=" () => { $refs.desc.onFieldBlur();}"
      />
    </a-form-model-item>
    <a-form-model-item label="商品类目" prop="category">
      <a-select v-model="form.category" @change="selectChange">
        <a-select-option  v-for="list in categoryList" :key="list.id" :value="list.id" >
           {{list.name}}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_items">
        <a-select-option v-for="c in categoryCTimesList" :key="c" :value="c">
          {{c}}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags">
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
    <a-form-model-item label="" wrapperCol="24">
        <a-button type="primary">下一步</a-button>
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
        title: { required: true, message: '请输入标题', trigger: 'blur' },
        category: { required: true, message: '请选择商品类目', trigger: 'blur' },
      },
      categoryList:[],
      categoryCTimesList:[],
    };
  },
  created() {
    apigetcategory().then((res) => {
      this.categoryList = res.data.data
    });
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    selectChange(category){
       for(let i = 0; i < this.categoryList.length; i++){
         if(this.categoryList[i].id === category){
            this.categoryCTimesList= this.categoryList[i].c_items;
         }
       }
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
