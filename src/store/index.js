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
    //로그아웃
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    login({dispatch, commit},signinObj){
       //post인자의 두번째 인자에는 파라미터 request body
        axios.post('https://reqres.in/api/login',signinObj )
          .then(res => {
            // handle success

            //로그인 성공시 token 이 돌아옴(실제로는 userid값을 받아옴)
            //token을 header에 포함시켜서 다시 요청
            let token = res.data.token
            localStorage.setItem('access-token',token)


            dispatch('getMemberInfo')

            .catch(() => {
              commit("loginError")
            })
          })
          .catch(()=> {
            // always executed
            commit("loginError")
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
    },
    getMemberInfo({commit}){
      let token = localStorage.getItem('access-token')
      let config = {
        headers : {
          "access-token" : token
        }
      }
      axios
      .get('https://reqres.in/api/users/2',config)
      .then(response => {
        let userInfo = {
          first_name : response.data.data.first_name,
          last_name : response.data.data.last_name,
          email: response.data.data.email,
          avatar : response.data.data.avatar,
          id : response.data.data.id
        }

        commit('loginSuccess',userInfo)
        router.push({name:"home"})
      })
    }
  },
  modules: {

  }
})
