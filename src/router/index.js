import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }, {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index')
  }, {
    path: '/404',
    component: () => import('@/views/404/index'),
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
