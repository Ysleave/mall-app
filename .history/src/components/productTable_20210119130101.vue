<template>
  <a-table :data-source="Tabledata" :columns="columns" :pagination="pagination">
  </a-table>
</template>

<script>

export default {
  props:["data",'pagination'],
  data() {
    return {
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      columns: [
        {
          title: "ID ",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "标题",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "描述",
          dataIndex: "desc",
          key: "desc",
        },
        {
          title: "类目",
          dataIndex: "category",
          key: "category",
        },
        {
          title: "商品标签",
          dataIndex: "tags",
          key: "tags",
        },
        {
          title: "价格",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "折扣价",
          dataIndex: "price_off",
          key: "price_off",
        },
        {
          title: "商品单位",
          dataIndex: "unit",
          key: "unit",
        },
        {
          title: "商品上架状态",
          dataIndex: "Int",
          key: "Int",
        },
        {
          title: "商品图片",
          dataIndex: "images",
          key: "images",
        },
        {
          title: "商品库存量",
          dataIndex: "inventory",
          key: "inventory",
        },
        {
          title: "商品销量",
          dataIndex: "sale",
          key: "sale",
        },
        {
          title: "更新时间",
          dataIndex: "updateTime",
          key: "updateTime",
        },
      ],
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
  },
  computed:{
     Tabledata(){
       return this.data.map(item => {
         return {
           ...item,
           key:item.id,
         }
       })
     }
  },
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
