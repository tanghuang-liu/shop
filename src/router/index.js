import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    hidden: true,
    redirect: '/dashboard'
  },
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index')
  },
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'Dashboard', icon: 'dashboard' },
    children: [{
      path: '/dash',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dash', icon: 'dashboard' }
    }]
  },
  {
    path: '/user',
    component: () => import('@/views/dashboard/index')
  },
  {
    path: '/404',
    component: () => import('@/views/404/index'),
    hidden: true
  }
]

const createRouter = () => new VueRouter({
  routes
})
const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
