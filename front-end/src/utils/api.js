import axios from 'axios'
import store from '@/store/index.js'
import baseURL from './baseUrl'
import { message } from 'element-ui'

const api = {}

const instance = axios.create({
  timeout: 5000
})

//请求拦截
instance.interceptors.request.use(
  function(config) {
    //请求头添加token
    if (store.state.UserToken) {
      config.headers.Authorization = store.state.UserToken
    }
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

//响应拦截

instance.interceptors.response.use(response => {
  return response.data
},err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求出错'
        break
      case 401: 
        err.message = '认证失败'
        break
      case 403:
        err.message = '没有权限'
        break
      case 404:
        err.message = '页面丢失'
    }
  }
})
export default instance