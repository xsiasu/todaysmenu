import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers : [
      {id:1,email:'a@gmail.com',password:'123456'},
      {id:2,email:'b@gmail.com',password:'123456'},
      {id:3,email:'c@gmail.com',password:'123456'},
      {id:4,email:'d@gmail.com',password:'123456'}
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
    login({state, commit},signinObj){
      //sigininObj에 입력값을 받아서 커밋한다
      let seletedUser = null;
        state.allUsers.forEach(user => {
          if(user.email === signinObj.email) {
            seletedUser = user;
          }
        });

        if(seletedUser === null || seletedUser.password !== signinObj.password)
          commit('loginError')
        else {
          commit('loginSuccess')
          //로그인성공시 리다이렉트
          router.push({name:"mypage"})
        }
        console.log({signinObj})
    },
    signUp(){

    }
  },
  modules: {

  }
})
