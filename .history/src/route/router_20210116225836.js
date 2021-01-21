import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import store from '@/store'

Vue.use(Router)
const routers =  new Router({
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

routers.beforeEach((to,from,next) =>{
  if(to.path !== "/login"){
      if(store.state.userInfo.appkey && store.state.userInfo.username){
        return next()
      }else{
        return next('/login')
      }
  }
  next()
})

export default routers
