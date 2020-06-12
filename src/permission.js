import router from './router'
import { getToken } from '@/utils/auth' // get token from cookie

router.beforeEach((to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()
  if (to.path === '/login') {
    next()
  } else {
    if (hasToken) {
      next()
    } else {
      next('/login')
    }
  }
})
