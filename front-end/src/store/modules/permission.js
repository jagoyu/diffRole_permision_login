import { fetchPermission } from 'api'
import router,{ DynamicRoutes } from 'router'
import dynamicRouter from 'router/dynamic-router'
import { setDefaultRoute, recursionRouterTree } from 'utils/recursion-router'
const _ = require('lodash')

export default {
  namespaced: true,
  state: {
    permissionList: null,
    sidebarMenu: [], //导航菜单
    currentMenu: '', //高亮
  },
  mutations: {
    SET_PERMISSION(state, routes) {
      state.permissionList = routes
    },
    CLEAR_PERMISSION(state) {
      state.permissionList = null
    },
    SET_MENU(state, menu) {
      state.sidebarMenu = menu
    },
    CLEAR_MENU(state) {
      state.sidebarMenu = []
    }
  },
  //异步访问
  actions: {
    async FETCH_PERMISSION({ commit, state }) {
      let permissionList = []
      let res = await fetchPermission()
      if (res.code === 0) {
        permissionList = res.data
      }
      //筛选
      let cpdyna = _.cloneDeep(dynamicRouter)

      let routes = recursionRouterTree(permissionList, cpdyna)

      let cpDyna = _.cloneDeep(DynamicRoutes)

      let mainContainer = cpDyna.find(v => v.path === '')
      let children = mainContainer.children 
      children.push(...routes)

      //生成菜单
      commit('SET_MENU', children)
      //设置默认路由
      setDefaultRoute([mainContainer])
      //初始化路由
      let initialRoutes = router.options.routes
      router.addRoutes(cpDyna)

      commit('SET_PERMISSION',[...initialRoutes, ...cpDyna])
    }
  }
}
