import Vue from 'vue'
import Vuex from 'vuex'
import {} from "@/"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    userInfo:{
      email:'',
      appkey:'',
      role:'',
      username:'',
    }
  },
  mutations: {
     changeCollapsed(state){
       state.collapsed = !state.collapsed
     },
     changeUserinfo(state,userInfo){
      state.userInfo = userInfo
     }
  },
  actions: {
    changeCollapsed({commit}){
      commit("changeCollapsed")
    },
    commitUserinfo({commit},userInfo){
      console.log(userInfo);
      
      commit("changeUserinfo",userInfo)
    }
  }
})
