<template>
  <a-form-model
    layout="inline"
    :model="searchForm"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item label="检索关键字">
      <a-input v-model="searchForm.searchWord" placeholder="请输入检索关键字">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="商品类目">
      <a-select
        show-search
        placeholder="选择商品类目"
        style="width: 200px"
        @change="handleChange"
      >
        <a-select-option v-for="category in categoryList" :key="category.id" :value="category.id">{{category.name}}</a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit">
        搜索
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import {apigetcategory} from '@/service/api/category'

export default {
  data() {
    return {
      searchForm: {
        searchWord: "",
        category: "",
      },
      categoryList:[],
    };
  },
  created(){
     apigetcategory().then(res => {
       this.categoryList = res.data.data
     })
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
    handleChange(val){
        this.searchForm.category = val
    }
  },
};
</script>
