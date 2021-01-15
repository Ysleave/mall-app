<template>
  <div class="add">
      <a-button id="add-submit" @click="add">添加</a-button>
  </div>
</template>
a-button type="primary">
      Primary
    </a-button>
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

</style>
