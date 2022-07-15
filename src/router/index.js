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
        path: '/employees',
        name: 'EmployeeView',
        component: () => import(
          '@/views/shop/ShoplistView'
        ),
      },
      {
        path: '/main',
        name: 'MainView',
        component: () => import(
          '@/views/main/MainView'
        ),
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
        path: '/authentication/sign-in',
        name: 'signIn',
        component: () => import('@/views/member/SigninView.vue')
      },
      {
        path: '/authentication/sign-up',
        name: 'signUp',
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
