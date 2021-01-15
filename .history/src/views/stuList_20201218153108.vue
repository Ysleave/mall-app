<template>
    <div class="student-list content" id="student-list">
      <stu-search></stu-search>
      <stu-table></stu-table>
      <turn-page></turn-page>
      
      <model v-if="showmodel"/>
     
    </div>
</template>

<script>
import stuSearch from '../components/stuSearch.vue'
import stuTable from '../components/stuTable.vue'
import turnPage from '../components/turnPage.vue'
import model from '../components/model'
import  { mapActions,mapState,mapMutations } from 'vuex'
export default {
  name: "",

  data() {
    return {};
  },
  components:{
    stuSearch,
    stuTable,
    turnPage,
    model
  },
  computed:{
      ...mapState(['showmodel'])
  },

  methods: {}
};
</script>

<style></style>
