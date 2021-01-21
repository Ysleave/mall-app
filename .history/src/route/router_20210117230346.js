import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import store from '@/store'
import getMenuRouter from '../utils/routerPowerManage'

Vue.use(Router)

const asyncRouterMap = [{
  path:'/product',
  name:"Product",
  meta:{
    title:'商品',
  },
  component: Home,
  children:[{
      path: '/list',
      name: "ProductList",
      meta:{
        title:'商品列表'
      },
      component:() => import('@/views/productList.vue')
    },
    {
      path:'/add',
      name:'ProductAdd',
      meta:{
        title:'商品添加'
      },
      component:() => import('@/views/productAdd.vue')
    },
    {
      path:'category',
      name:'Category',
      meta:{
        title:"类目管理"
      },
      component:() => import('@/views/category.vue')
    }
  ]
}]


const routers =  new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      component:Home,
      name:"Home",
      meta:{
        title:"商品"
      },
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:"登录"
      },
      component: () => import("@/views/login.vue")
    }
  ],
  linkActiveClass:'active'
})

routers.beforeEach((to,from,next) =>{
  if(to.path !== "/login"){
      if(store.state.userInfo.appkey && store.state.userInfo.username){
        const menuRouters = getMenuRouter()
        return next()
      }else{
        return next('/login')
      }
  }
  next()
})

export default routers
