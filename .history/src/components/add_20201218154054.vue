<template>
  <div class="add">
      <a-button type="primary" id="add-submit" @click="add">添加</a-button>
  </div>
</template>

<script>
import { mapActions,mapMutations } from 'vuex';

export default {
  name: '',

  data () {
    return {
      keyWord:''
    }
  },

  methods: {
    add() {
      // this.setKeyword(this.keyWord)
      // if(this.keyWord == '') {
      //    this.getStuList()
      // }else{
      //   this.searchStu()
      // }
    },
    // ...mapActions(['searchStu','getStuList']),
    // ...mapMutations(['setKeyword'])
  }
}
</script>

<style sc>
  .add{
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding: 0px 20px;
    background-color: #eee;
  }
</style>
<!--  -->
<template>
<div class=''></div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>