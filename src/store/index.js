import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers : [
      {id:1,password:'123456',email:'a@a.com'}
    ],
    isLogin : false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
