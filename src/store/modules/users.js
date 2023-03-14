import router from '@/router'
import api from '@/api'

const state = {
  users: [],
  user: null
}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  fetchUsers ({ commit, rootState }, pageNumber = 1) {
    if (!pageNumber) return

    commit('setLoading', true, { root: true })

    api.users
      .getUsers(pageNumber, rootState.pagination.perPage)
      .then(response => {
        const data = response.data
        commit('setUsers', data.data)
        commit('pagination/setPageNumber', data.page, { root: true })
        commit('pagination/setPerPage', data.per_page, { root: true })
        commit('pagination/setTotalPages', data.total_pages, { root: true })
        commit('pagination/setTotal', data.total, { root: true })
        commit('setLoading', false, { root: true })
      })
      .catch(error => {
        // There also should be notified visible to the user about error.
        commit('setError', error.message, { root: true })
        commit('setLoading', false, { root: true })
      })
  },
  fetchUser ({ commit }, userId) {
    if (!userId) return

    commit('setLoading', true, { root: true })

    api.users
      .getUser(userId)
      .then(response => {
        commit('setUser', response.data.data)
        commit('setLoading', false, { root: true })
      })
      .catch(error => {
        // There also should be notified visible to the user about error.
        commit('setError', error.message, { root: true })
        commit('setLoading', false, { root: true })
      })
  },
  createUser ({ commit }, user) {
    if (!user) return

    commit('setLoading', true, { root: true })

    api.users
      .createUser(user)
      .then(() => {
        // In the real world, the response should include an updated list of the users,
        // or we should dispatch fetchUser action, but it is not an optimal solution.
        // There also should be notified visible to the user about success.
        commit('setLoading', false, { root: true })
        router.push({ name: 'Users' })
      })
      .catch(error => {
        // There also should be notified visible to the user about error.
        commit('setError', error.message, { root: true })
        commit('setLoading', false, { root: true })
      })
  },
  updateUser ({ commit }, user) {
    if (!user) return

    const { id, firstName, lastName, avatar } = user

    commit('setLoading', true, { root: true })

    api.users
      .updateUser(id, { firstName, lastName, avatar })
      .then(() => {
        // In the real world, the response should include an updated user's object, or we should
        // update the user object in our state using mutations, but it is not an optimal solution.
        // There also should be notified visible to the user about success.
        commit('setLoading', false, { root: true })
        router.push({ name: 'Users' })
      })
      .catch(error => {
        // There also should be notified visible to the user about error.
        commit('setError', error.message, { root: true })
        commit('setLoading', false, { root: true })
      })
  },
  removeUser ({ commit }, userId) {
    if (!userId) return

    commit('setLoading', true, { root: true })

    api.users
      .removeUser(userId)
      .then(() => {
        // In the real world, the response should include an updated list of the users,
        // or we should dispatch fetchUser action, but it is not an optimal solution.
        // There also should be notified visible to the user about success.
        commit('setLoading', false, { root: true })
        router.push({ name: 'Users' })
      })
      .catch(error => {
        // There also should be notified visible to the user about error.
        commit('setError', error.message, { root: true })
        commit('setLoading', false, { root: true })
      })
  }
}

const getters = {
  users: state => state.users,
  user: state => state.user
}

export default { namespaced: true, state, mutations, actions, getters }
