<!--  -->
<template>
  <div class="productWrapperhead">
    <productSearch @submit="searchHander" />
    <productTable :Tabledata="data" :pagination="pagination"/>
  </div>
</template>
<script>
import productSearch from "@/components/productSearch";
import productTable from "@/components/productTable";
import { apigetproductsList } from "@/service/api/product";

export default {
  components: {
    productSearch,
    productTable,
  },
  data() {
    return {
      pageSet: {
        size: 10,
        page: 1,
        total:'',
      },
      pagination:{
        
      },
      data: [],
    };
  },
  computed: {},
  methods: {
    searchHander(val) {
      console.log(val);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    apigetproductsList(this.pageSet).then((res) => {
      console.log(res);
      this.data = res.data.data;
      this.pageSet.total = res.data.total
    });
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
