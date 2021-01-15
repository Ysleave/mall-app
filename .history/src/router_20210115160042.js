import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/add_stu',
      name:'addStudent',
      component:addStu
    },
    {
      path:'/stu_list',
      name:'studentList',
      component:stuList
    },
    {
      path:'*',
      redirect:'/stu_list'
    }
  ],
  linkActiveClass:'active'
})
