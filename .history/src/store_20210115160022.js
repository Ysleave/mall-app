import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     stuList:[],
     page:1,
     size:10,
     showmodel:false,
     editUser:{},
     total:0,
     keyWord:'',
     addmodalvisible:false
  },
  mutations: {

  },
  actions: {

  }
})
