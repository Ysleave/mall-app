<template>
  <a-modal
    title="Title"
    :visible="addmodalvisible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :footer="null"
  >
    <a-form-model
      ref="dynamicValidateForm"
      :model="dynamicValidateForm"
      v-bind="formItemLayoutWithOutLabel"
    >
      <a-form-model-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        v-bind="index === 0 ? formItemLayout : {}"
        :label="index === 0 ? 'Domains' : ''"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: 'domain can not be null',
          trigger: 'blur',
        }"
      >
        <a-input
          v-model="domain.value"
          placeholder="please input domain"
          style="width: 60%; margin-right: 8px"
        />
        <a-icon
          v-if="dynamicValidateForm.domains.length > 1"
          class="dynamic-delete-button"
          type="minus-circle-o"
          :disabled="dynamicValidateForm.domains.length === 1"
          @click="removeDomain(domain)"
        />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="dashed" style="width: 60%" @click="addDomain">
          <a-icon type="plus" /> Add field
        </a-button>
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-button
          type="primary"
          html-type="submit"
          @click="submitForm('dynamicValidateForm')"
        >
          Submit
        </a-button>
        <a-button
          style="margin-left: 10px"
          @click="resetForm('dynamicValidateForm')"
        >
          Reset
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
      dynamicValidateForm: {
        domains: [],
      },
      ModalText: 'Content of the modal',
      confirmLoading: false,
    };
  },
  computed:{
      ...mapState(['addmodalvisible'])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.$store.commit('changeAddmodalVisible',false)
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.$store.commit('changeAddmodalVisible',false)
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
