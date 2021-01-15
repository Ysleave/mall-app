<template>
  <div class="add">
      <button id="search-submit" @click="search">搜索</button>
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
    search() {
      this.setKeyword(this.keyWord)
      if(this.keyWord == '') {
         this.getStuList()
      }else{
        this.searchStu()
      }
    },
    ...mapActions(['searchStu','getStuList']),
    ...mapMutations(['setKeyword'])
  }
}
</script>

<style>

</style>
