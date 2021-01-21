<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="副标题" prop="title">
      <a-input
        v-model="form.title"
        @blur="
          () => {
            $refs.title.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input
        v-model="form.desc"
        @blur="
          () => {
            $refs.desc.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="商品类目" prop="category">
     <a-select v-model="form.category">
        <a-select-option  value="1" name="type">
          Online
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_items">
        <a-select-option value="1" name="type">
          Online
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags">
        <a-select
          mode="tags"
          placeholder="Please select"
          :default-value="['包邮，昨晚次日到',]"
          style="width: 200px"
          @change="handleChange"
        >
         <a-select-option value="包邮，昨晚次日到">
          Online
        </a-select-option>
        </a-select>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: { },
    };
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
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
