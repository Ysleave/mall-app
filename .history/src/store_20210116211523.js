import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    userinfo:{
      ema
    }
  },
  mutations: {
     changeCollapsed(state){
       state.collapsed = !state.collapsed
     }
  },
  actions: {
    changeCollapsed({commit}){
      commit("changeCollapsed")
    }
  }
})
