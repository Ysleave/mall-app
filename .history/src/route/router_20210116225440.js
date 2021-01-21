import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import store from '@/store'

Vue.use(Router)
const router =  new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      component:Home,
      name:"Home"
    },
    {
      path:'/login',
      name:'login',
      component: () => import("@/views/login.vue")
    }
  ],
  linkActiveClass:'active'
})

router.beforeEach((to,from,next) =>{
  
})

export default router
