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
        path: '/',
        name: 'home',
        component: () => import(
          '@/views/home/HomeView'
        ),

      }
    ]
  },
  //authentication layout
  // {
  //   path: '/authentication',
  //   component: () => import(
  //     '@/layouts/authentication/Index'
  //   ),
  //   children: [
  //     {
  //       path: '/sign-in',
  //       name: 'signIn',
  //       component: () => import('@/member/SigninView.vue')
  //     },
  //     {
  //       path: '/sign-up',
  //       name: 'signUp',
  //       component: () => import('@/member/SignupView.vue')
  //     },

  //     {
  //       path: '/view-myinfo',
  //       name: '',
  //       component: () => import('@/member/SignupView.vue')
  //     },
  //     {
  //       path: '/modify-myinfo',
  //       name: '',
  //       component: () => import('@/member/SignupView.vue')
  //     },
  //   ]
  // },
  //worksheet
  // {
  //   path: '/work-sheet',
  //   name: '',
  //   component: () => import('@/WorkSheet.vue')
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
