<template>
     <table border="0">
                    <!-- 表头区域 -->
                    <thead>
                        <tr>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>邮箱</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>住址</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <!-- 表格内容 -->
                    <tbody id="student-body">
                        <tr v-for="(item,index) in stuList" :key="index">
                            <td>{{ item.sNo }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.sex == 0 ? '男' : '女'}}</td>
                            <td>{{ item.email }}</td>
                            <td>
                                {{ new Date().getFullYear() - item.birth }}
                            </td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.address }}</td>
                            <td>
                                <button class="btn edit" @click="oEdit(item)">编辑</button>
                                {{''}}
                                <button class="btn del" @click="del(item.sNo)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: '',

  data () {
    return {
    }
  },
  computed: {
    ...mapState(['stuList'])  
  },

  methods: {
      oEdit(item) {
          this.setShowModel(true);
          this.setEditUser(item)
      },
      del(sNo) {
          let falg = confirm('确定删除吗')
          if(falg) {
              this.delBySno(sNo)
          }
      },
      ...mapMutations(['setShowModel','setEditUser']),
      ...mapActions(['delBySno'])
  }
}
</script>

<style>

</style>
