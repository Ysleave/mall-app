<template>
  <div class="tableWrapper">
    <a-table
      :data-source="Tabledata"
      :columns="columns"
      :pagination="pagination"
      @change="pageChange"
    >
      <span slot="operation" slot-scope="text, record">

        <a-button class="editBtn" type="primary" ghost @click="editTable(record)">编辑</a-button>
        <a-button type="danger" ghost  @click="removeTable(record)">删除</a-button>
      </span>
    </a-table>
  </div>
</template>

<script>
export default {
  props: ["data", "pagination"],
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
          dataIndex: "categoryName",
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
          title: "上架状态",
          dataIndex: "Int",
          key: "Int",
        },
        {
          title: "库存量",
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
        {
          title: "操作",
          dataIndex: "operation",
          key: "operation",
          scopedSlots: { customRender: "operation" },
        },
      ],
    };
  },
  methods: {
    pageChange(page) {
      this.$emit("pageChange", page);
    },
    removeTable(record) {
      this.$emit("remove", record);
    },
    editTable(record) {
      this.$emit("edit", record);
    },
  },
  computed: {
    Tabledata() {
      return this.data.map((item) => {
        return {
          ...item,
          key: item.id,
        };
      });
    },
  },
};
</script>
<style lang="less">
.tableWrapper {
  padding: 10px 0;
  .editBtn{
      padding-right: 10px;
  }
}
</style>
