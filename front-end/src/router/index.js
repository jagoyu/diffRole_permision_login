import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/home'
import Login from 'pages/login'
import NotFound from 'pages/errorPage/404'
import Forbidden from 'pages/errorPage/403'

import Layout from 'pages/layout'

Vue.use(VueRouter)

// 解决点击重复路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

/**
 * 根据用户权限不同，所能看到的页面和可操作性也不同
 * admin -> 所有页面都可以看到
 * vip -> 属于vip的权限
 */
//动态加载路由
export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          //匹配规则
          name: '首页',
          icon: 'icon-name',
          isBlock: true
        }
      }
    ]
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
