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

<style scoped>
  .add{
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding: 0px 20px;
    background-color: #eee;
    color: #fff;
  }
</style>
