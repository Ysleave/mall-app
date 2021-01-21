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
      <a-checkbox-group v-model="form.category">
        <a-checkbox value="1" name="type">
          Online
        </a-checkbox>
      </a-checkbox-group>
      <a-checkbox-group v-model="form.c_items">
        <a-checkbox value="1" name="type">
          Online
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags">
        <a-select
          mode="tags"
          :size="size"
          placeholder="Please select"
          :default-value="['a1', 'b2']"
          style="width: 200px"
          @change="handleChange"
        >
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
