import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

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
  },
  async logout ({ commit, state, dispatch }) {
    await logout(state.token).then(() => {
      commit('SET_TOKEN', '')
      removeToken()
      resetRouter()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
