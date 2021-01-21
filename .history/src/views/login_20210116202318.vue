<template>
<div class="loginWrapper">
  <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <a-form-model-item has-feedback label="邮箱" prop="email">
      <a-input v-model="ruleForm.email" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        登录
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
</div>
</template>
<script>
import * as user from '@/service/api/user'

export default {
  data() {
    //验证邮箱
    let EmialReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the email'));
      } 
      if (EmialReg.test(value)) {
        return callback();
      }else{
        return callback(new Error('邮箱格式不正确'));
      }
    };
    //验证密码      
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        console.log(this.ruleForm.pass);                                                                               
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: validatePass, trigger: 'change' }],
        password: [{ validator: validatePass2, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           user.login(this.resetForm).then(res => {
             console.log(res);
           })
           return true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style  lang="less">
  .loginWrapper{
    width: 600px;
    margin: 100px auto;
    border:1px solid #eee;
    padding: 60px 10px;
  }

</style>
