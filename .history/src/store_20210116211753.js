import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    userInfo:{
      email:'',
      appkey:'',
      role:'',
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
      commit("changeUserinfo",userInfo)
    }
  }
})
