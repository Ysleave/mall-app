<template>
  <a-table :data-source="data" :columns="columns">
    <div
      slot="filterDropdown"
      slot-scope="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
      style="padding: 8px"
    >
      <a-input
        v-ant-ref="(c) => (searchInput = c)"
        :placeholder="`Search ${column.dataIndex}`"
        :value="selectedKeys[0]"
        style="width: 188px; margin-bottom: 8px; display: block;"
        @change="(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="
          () => handleSearch(selectedKeys, confirm, column.dataIndex)
        "
      />
      <a-button
        type="primary"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
        @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
      >
        Search
      </a-button>
      <a-button
        size="small"
        style="width: 90px"
        @click="() => handleReset(clearFilters)"
      >
        Reset
      </a-button>
    </div>
    <a-icon
      slot="filterIcon"
      slot-scope="filtered"
      type="search"
      :style="{ color: filtered ? '#108ee9' : undefined }"
    />
    <template slot="customRender" slot-scope="text, record, index, column">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
        >
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            :key="i"
            class="highlight"
            >{{ fragment }}</mark
          >
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
      <template v-else>
        {{ text }}
      </template>
    </template>
  </a-table>
</template>

<script>
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export default {
  data() {
    return {
      data,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      columns: [
        {
          title: "商品标题",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "商品描述",
          dataIndex: "desc",
          key: "desc",
        },
        {
          title: "商品类目",
          dataIndex: "category",
          key: "category",
        },
        {
          title: "商品子类目",
          dataIndex: "c_items",
          key: "c_items",
        },
         {
          title: "商品标签",
          dataIndex: "tags",
          key: "tags",
        },
        {
          title: "商品价格",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "商品折扣价",
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
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
