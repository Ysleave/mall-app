import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      component:Home,
      name:"Home"
    },
    {
      path:'/login',
      name:Login,
      component:()=>import("@/views/login.vue")
    }
  ],
  linkActiveClass:'active'
})
