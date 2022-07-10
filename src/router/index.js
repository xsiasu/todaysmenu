import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //default layout
  {
    path: '/',
    component: () => import(
      '@/layouts/default/Index'
    ),
    children :[
      {
        path: '/home',
        name: 'homeView',
        component: () => import(
          '@/views/home/HomeView'
        ),

      }
    ]
  },
  //authentication layout
  {
    path: '/authentication',
    component: () => import(
      '@/layouts/authentication/Index'
    ),
    children: [
      {
        path: '/sign-in',
        name: 'signIn',
        component: () => import('@/views/member/SigninView.vue')
      },
      {
        path: '/sign-up',
        name: 'signUp',
        component: () => import('@/views/member/SignupView.vue')
      },

      {
        path: '/view-myinfo',
        name: 'viewMyinfo',
        component: () => import('@/views/member/ViewMyinfo.vue')
      },
      {
        path: '/modify-yinfo',
        name: 'modifyMyinfo',
        component: () => import('@/views/member/ModifyMyinfo.vue')
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
