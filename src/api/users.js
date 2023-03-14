import axios from 'axios'

export default {
  getUsers: (pageNumber, perPage) => axios.get(`/users?page=${pageNumber}&per_page=${perPage}`),
  getUser: userId => axios.get(`/users/${userId}`),
  createUser: data => axios.post(`/users`, data),
  updateUser: (id, data) => axios.patch(`/users/${id}`, data),
  removeUser: userId => axios.delete(`/users/${userId}`)
}
