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

<style>
  .add{
    
  }
</style>
