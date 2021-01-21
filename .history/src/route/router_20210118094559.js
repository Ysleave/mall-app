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
    isHidle:false,
    icon:'switcher'
  },
  component: Home,
  children:[{
      path: '/list',
      name: "ProductList",
      meta:{
        title:'商品列表',
        isHidle:false,
        icon:'ordered-list'
      },
      component:() => import('@/views/productList.vue')
    },
    {
      path:'/add',
      name:'ProductAdd',
      meta:{
        title:'商品添加',
        isHidle:false,
        icon:'plus-square'
      },
      component:() => import('@/views/productAdd.vue')
    },
    {
      path:'category',
      name:'Category',
      meta:{
        title:"类目管理",
        isHidle:false,
        icon:'database'
      },
      component:() => import('@/views/category.vue')
    }
  ]
}]
let routes = [
  {
    path:'/',
    component:Home,
    name:"Home",
    meta:{
      title:"首页",
      isHidle:false,
      icon:'home'
    },
    children:[
      {
        path:'/index',
        component:() => import('@/views/count.vue'),
        name:'Index',
        meta:{
          title:"统计",
          isHidle:false,
          icon:'pie-chart'
        }
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    meta:{
      title:"登录",
      isHidle:true,
    },
    component: () => import("@/views/login.vue")
  }
]

const routers =  new Router({
  mode: 'history',
  routes,
  linkActiveClass:'active'
})

let isAddFlag = false
routers.beforeEach((to,from,next) =>{
  if(to.path !== "/login"){
      if(store.state.userInfo.appkey && store.state.userInfo.username){
        if(!isAddFlag){
          const menuRouters = getMenuRouter(store.state.userInfo.role,asyncRouterMap)
          store.dispatch('commitMenuRouter',routes.concat(menuRouters)).then(() => {
            routers.addRoutes(menuRouters);
            next()
          })
          isAddFlag = true;
        } 
        return next()
      }else{
        return next('/login')
      }
  }
  next()
})

export default routers
