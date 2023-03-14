const state = {
  pageNumber: 1,
  perPage: 8,
  totalPages: 0,
  total: 0
}

const mutations = {
  setPageNumber (state, pageNumber) {
    state.pageNumber = pageNumber
  },
  setPerPage (state, perPage) {
    state.perPage = perPage
  },
  setTotalPages (state, totalPages) {
    state.totalPages = totalPages
  },
  setTotal (state, total) {
    state.total = total
  }
}

const actions = {}

const getters = {
  pageNumber: state => state.pageNumber,
  perPage: state => state.perPage,
  totalPages: state => state.totalPages,
  total: state => state.total
}

export default { namespaced: true, state, mutations, actions, getters }
