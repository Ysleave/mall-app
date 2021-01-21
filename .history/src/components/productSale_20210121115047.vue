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
      <a-input v-model="form.price_off" />
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="unit" required>
      <a-input v-model="form.unit" />
    </a-form-model-item>
    <a-form-model-item label="计量单位" prop="inventory" required>
      <a-input v-model="form.inventory" />
    </a-form-model-item>
    <a-form-model-item label="商品相册" prop="images">
      <a-upload
        :action="
          'https://mallapi.duyiedu.com/upload/images?appkey=' +
            $store.state.userInfo.appkey
        "
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
        name="avatar"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">
            Upload
          </div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-form-model-item>
    <a-form-model-item class="saleBtn" label="" :wrapperCol="{ span: 24 }">
      <a-button type="primary" @click="prev">上一步</a-button>
      <a-button type="primary" @click="next">提交</a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { apigetcategory } from "@/service/api/category.js";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ["form"],
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      rules: {},
      categoryList: [],
      previewVisible:false,
      categoryCTimesList: [],
      fileList: [
      ],
      previewImage: '',
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
          this.$emit("next");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    prev() {
      this.$emit("prev");
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({file, fileList }) {
      if(file.status == "done" ){
        this.form.images.push(file.response.data.url);
      }else if(file.status == "removed"){
        debugger
        const {url} = file.response.data;
        this.form.images = this.form.images.filter(item => item !== url)
      }
      this.fileList = fileList;
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.saleBtn button {
  margin: 0 10px;
}
</style>
