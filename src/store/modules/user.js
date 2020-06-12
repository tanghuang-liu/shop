import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}
const actions = {
  async login ({ commit }, userInfo) {
    await login(userInfo).then(res => {
      const { data } = res
      commit('SET_TOKEN', data.token)
      setToken(data.token)
      return res
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
