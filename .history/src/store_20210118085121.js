import Vue from 'vue'
import Vuex from 'vuex'
import {setCookies,getUserCookies,removeUserCookies} from "@/utils/userCookie"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    userInfo:getUserCookies(),
    menuRouter:[],
  },
  mutations: {
     changeCollapsed(state){
       state.collapsed = !state.collapsed
     },
     changeUserinfo(state,userInfo){
      state.userInfo = userInfo
     },
     logout(state){
       state.userInfo = {
        email:'',
        appkey:'',
        role:'',
        username:'',
       }
     },
     changeMenuRouter(state,newMenuRouter){
       state.menuRouter = newMenuRouter
     },
  },
  actions: {
    changeCollapsed({commit}){
      commit("changeCollapsed")
    },
    commitUserinfo({commit},userInfo){
      setCookies(userInfo)
      commit("changeUserinfo",userInfo)
    },
    commitLogout({commit}){
      removeUserCookies()
      commit("logout")
    },
    commitMenuRouter({commit},newMenuRouter)
  }
})
