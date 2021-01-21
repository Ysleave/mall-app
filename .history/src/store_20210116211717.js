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
     changeUserinfo(state,userinfo){
      state.userinfo = userinfo
     }
  },
  actions: {
    changeCollapsed({commit}){
      commit("changeCollapsed")
    },
    commitUserinfo({commit},{uns})
  }
})
