import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users.js'
import pagination from './modules/pagination.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { users, pagination },
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error
  }
})
