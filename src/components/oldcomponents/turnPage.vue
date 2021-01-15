<template>
           <!-- v-if="nowPage + i -3 > 0 && nowPage + i -3 <= totalPage" -->
    <ul id="turn-page">
        <li v-if="nowPage > 1" @click="turnPage(-1)">上一页</li>
        <li v-if="nowPage>3" @click="turnPage(1)">1</li>
        <li v-if="nowPage>4">...</li>
        <li 
           v-for="i in 5"
           :key="i"

           :class="{'cur-page':i==3}"
           @click="turnPage(nowPage + i -3)">
           {{nowPage + i -3}}
        </li>
        <li v-if="totalPage-4>=nowPage">...</li>
        <li v-if="totalPage-3>=nowPage" @click="turnPage(totalPage)">{{totalPage}}</li>
        <li v-if="nowPage < totalPage" @click="turnPage(0)">下一页</li>
                   <!-- <li class="prev-page">上一页</li>
                   <li class="active tcdNumber">1</li>
                   <li class="tcdNumber">2</li>
                   <li class="tcdNumber">3</li>
                   <span>...</span>
                   <li class="tcdNumber">8</li>
                   <li class="tcdNumber">9</li>
                   <li class="tcdNumber">10</li>
                   <li class="next-page">下一页</li> -->
    </ul>
</template>

<script>
import {mapActions,mapMutations,mapState } from 'vuex'
 export default {
  name: '',

  data () {
    return {
      nowPage:1
    }
  },
  computed:{
      ...mapState({
        totalPage:state => Math.ceil( +state.total / 10),
        keyWord:state => state.keyWord
      })
  },
  watch:{
    keyWord(){
      this.nowPage = 1
    }
  },
  methods: {
    turnPage(pageNum) {
      if(pageNum == 0){
          if(this.nowPage < this.totalPage){
            this.nowPage ++
          }
      }else if(pageNum == -1){
          if(this.nowPage > 1) {
            this.nowPage --
          }
      }else{
          this.nowPage = pageNum
      }
      this.getStuList(this.nowPage)
    },
    ...mapActions(['getStuList'])
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
