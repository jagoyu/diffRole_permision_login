import axios from 'axios'
// import store from '@/store/index.js'
import BASE_URL from './baseURL'



const apiConfig = {
  baseURL: '/api',
  timeout: 6000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
const service = axios.create(apiConfig)

const apiConfigJson = {
  baseURL: '/api',
  timeout: 60000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/json'
  }
}
const serviceJson = axios.create(apiConfigJson)

//请求拦截
service.interceptors.request.use(
  config => {
    //请求头添加token
    // if (store.state.UserToken) {
    //   config.headers.Authorization = store.state.UserToken
    // }
    return config
  },
  err => {
    console.log('Service Request Error',err);
    Promise.reject(err)
  }
)
//响应拦截
service.interceptors.response.use(response => {
  return response
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


export { service, serviceJson }