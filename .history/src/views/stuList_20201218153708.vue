<template>
    <div class="student-list content" id="student-list">
      <div class="student-list-header">
         <stu-search></stu-search>
         <add></add>
      </div>
      <stu-table></stu-table>
      <turn-page></turn-page>

      <model v-if="showmodel"/>
     
    </div>
</template>

<script>
import stuSearch from '../components/stuSearch.vue'
import stuTable from '../components/stuTable.vue'
import turnPage from '../components/turnPage.vue'
import add from '@/components/add'
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
    model,
    add
  },
  computed:{
      ...mapState(['showmodel'])
  },

  methods: {}
};
</script>

<style>
.student-list-header{
  display: flex;
}
</style>
