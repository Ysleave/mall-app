import Vue from 'vue'
import Vuex from 'vuex'
import {setCookies,getUserCookies,removeUserCookies} from "@/utils/userCookie"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    userInfo:getUserCookies()
  },
  mutations: {
     changeCollapsed(state){
       state.collapsed = !state.collapsed
     },
     changeUserinfo(state,userInfo){
      state.userInfo = userInfo
     },
     logon(state){
       state.userInfo = {
        email:'',
        appkey:'',
        role:'',
        username:'',
       }
     }
  },
  actions: {
    changeCollapsed({commit}){
      commit("changeCollapsed")
    },
    commitUserinfo({commit},userInfo){
      console.log(userInfo);
      setCookies(userInfo)
      commit("changeUserinfo",userInfo)
    },
    commitLogon({commit}){}
  }
})
