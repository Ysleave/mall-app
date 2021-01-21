import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    userinfo:{
      email:'',
      appkey:'',
      role:'',
    }
  },
  mutations: {
     changeCollapsed(state){
       state.collapsed = !state.collapsed
     },
     changeUserinfo(state){
       
     }
  },
  actions: {
    changeCollapsed({commit}){
      commit("changeCollapsed")
    }
  }
})
