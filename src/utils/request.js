import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: 'http://42.159.135.112:6060',
  timeout: 6000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }

})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  }
)
export default service
