import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const rejecAuthtUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    alert("이밎로그인되었습니다.")
    next("/")
  } else {
    next()
  }
}

const onlyAuth = (to, from, next) => {
  if(store.state.isLogin === false) {
    alert("로그인이 필요한 기능입니다.")
    next("/")
  } else {
    next()
  }
}
const routes = [
  //default layout
  {
    path: '/',
    component: () => import(
      '@/layouts/default/Index'
    ),
    children :[
      {
        path: '/employees',
        name: 'EmployeeView',
        component: () => import(
          '@/views/shop/ShoplistView'
        ),
      },
      {
        path: '/',
        name: 'home',
        component: () => import(
          '@/views/main/MainView'
        ),
      },
      {
        path: '/view-myinfo',
        name: 'viewMyinfo',
        beforeEnter :onlyAuth,
        component: () => import('@/views/member/ViewMyinfo.vue')
      },
      {
        path: '/modify-yinfo',
        name: 'modifyMyinfo',
        component: () => import('@/views/member/ModifyMyinfo.vue')
      }
    ]
  },
  // authentication layout
  {
    path: '/authentication',
    component: () => import(
      '@/layouts/authentication/Index'
    ),
    children: [
      {
        path: '/sign-in',
        name: 'signIn',
        beforeEnter :rejecAuthtUser,
        component: () => import('@/views/member/SigninView.vue')
      },
      {
        path: '/sign-up',
        name: 'signUp',
        beforeEnter :rejecAuthtUser,
        component: () => import('@/views/member/SignupView.vue')
      },


    ]
  },
  //worksheet
  {
    path: '/work-sheet',
    name: '',
    component: () => import('@/views/WorkSheet.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
