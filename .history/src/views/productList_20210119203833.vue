<!--  -->
<template>
  <div class="productWrapperhead">
    <productSearch @submit="searchHander" :categoryList="categoryList"/>
    <productTable :data="data" :pagination="pagination" @pageChange="pageChangeHander"/>
  </div>
</template>
<script>
import productSearch from "@/components/productSearch";
import productTable from "@/components/productTable";
import { apigetproductsList } from "@/service/api/product";
import {apigetcategory} from '@/service/api/category';


export default {
  components: {
    productSearch,
    productTable,
  },
  data() {
    return {
      pagination: {
        current: 1,
        pageSize: 10,
        total: 50,
        showSizeChanger: true,
      },
      searchFrom: {},
      data: [],
      categoryList:[],
      setCategoryListMap:{},
    };
  },
  methods: {
    searchHander(from) {
      this.searchFrom = from;
    },
    getTableData() {
      apigetproductsList({
        page: this.pagination.current,
        size: this.pagination.pageSize,
        ...this.searchFrom,
      }).then((res) => {
        this.data = res.data.data.map(item => {
           return {
             ...item,
             categoryName:this.setCategoryListMap[item.category]
           }
        })
        this.pagination.total = res.data.total;
      });
    },
    pageChangeHander(newpae){
       this.pagination = newpae
       this.getTableData()
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
 async created() {
    await apigetcategory().then(res => {
       this.categoryList = res.data.data;
       if(res.data.data){
         res.data.data.forEach(item => {
            this.setCategoryListMap[item.id] = item.name
         })
       }
    })
    this.getTableData()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.productWrapperhead {
  padding: 10px 20px;
}
</style>
