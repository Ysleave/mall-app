import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/assets/css/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      component:home,
      name:"home"

    }
  ],
  linkActiveClass:'active'
})
