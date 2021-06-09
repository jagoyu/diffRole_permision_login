import store from 'store'
import { get, post, postJson } from './request'

// export function fetchPermission() {
//   return axios.get("permission?user=" + store.state.UserToken)
// }

// export function login(user) {
//   return axios.get("login?user=" + user)
// }

const loginApi = {
  login: post('/login'),
  fetchPermission:  post('/permission')
}

export {
  loginApi
}