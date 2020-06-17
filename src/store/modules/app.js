const state = {
  sidebar: false
}

const mutations = {
  SET_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar
  }
}
const actions = {
  toggleSideBar ({ commit }) {
    commit('SET_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
