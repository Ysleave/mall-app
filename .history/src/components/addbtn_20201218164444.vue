<template>
  <div class="add">
    <a-button type="primary" id="add-submit" @click="add">添加</a-button>
    <a-upload
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      @change="handleChange"
    >
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "",

  data() {
    return {
      keyWord: "",
    };
  },

  methods: {
    add() {
      this.$store.commit("changeAddmodalVisible", true);
      // this.setKeyword(this.keyWord)
      // if(this.keyWord == '') {
      //    this.getStuList()
      // }else{
      //   this.searchStu()
      // }
    },
    // ...mapActions(['searchStu','getStuList']),
    // ...mapMutations(['setKeyword'])
  },
};
</script>

<style scoped>
.add {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  padding: 0px 20px;
  background-color: #eee;
}
.add button {
  color: #fff;
}
</style>
