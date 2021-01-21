import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
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
      component:Login
    }
  ],
  linkActiveClass:'active'
})
