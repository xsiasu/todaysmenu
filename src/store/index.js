import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers : [
      {id:1,password:'123456',email:'a@a.com'}
    ],
    isLogin : false,
    isLoginError : false
  },
  getters: {

  },
  mutations: {
    //로그인이 성공했을때
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false
    },
    //로그인이 실패했을때
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {

  },
  modules: {

  }
})
