import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo : null,
    allUsers : [
      {id:1,email:'a@gmail.com',password:'123456',firstname:'sean',lastname:'kim'},
      {id:2,email:'b@gmail.com',password:'123456',firstname:'yumi',lastname:'an'},
      {id:3,email:'c@gmail.com',password:'123456',firstname:'sohui',lastname:'kim'},
      {id:4,email:'d@gmail.com',password:'123456',firstname:'hoyeong',lastname:'kim'}
    ],
    isLogin : false,
    isLoginError : false
  },
  getters: {

  },
  mutations: {
    //로그인이 성공했을때
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    //로그인이 실패했을때
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    login({commit},signinObj){

        axios.post('https://reqres.in/api/login',signinObj )
          .then(res => {
            // handle success
            console.log(res,commit);
          })
          .catch(err=> {
            // always executed
            console.log(err)
          });


      //sigininObj에 입력값을 받아서 커밋한다
      // let seletedUser = null;
      //   state.allUsers.forEach(user => {
      //     if(user.email === signinObj.email) {
      //       seletedUser = user;
      //     }
      //   });

      //   if(seletedUser === null || seletedUser.password !== signinObj.password)
      //     commit('loginError')
      //   else {
      //     commit('loginSuccess',seletedUser)
      //     //로그인성공시 리다이렉트
      //     router.push({name:"viewMyinfo"})
      //   }
      //   console.log({signinObj})
    },
    logout({commit}) {
      commit('logout')
      router.push( {name : "home"})
    }
  },
  modules: {

  }
})
