<!--  -->
<template>
  <div class="">
    <countCard />
    <countChartLine/>
  </div>
</template>

<script>
import countCard from "@/components/countCard";
import countChartLine from "@/components/countChartLine";


export default {
  components: {
    countCard,
    countChartLine,
  },
  data() {
    return {

    };
  },
  computed: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
