/**
 * 方法1: 比对路由权限
 * 方法2: 指定返回的默认路由
 */


/**
 * 
 * @param {Array} userRouter 后台返回的路由权限json
 * @param {Array} allRouter 前端配置好的路由权限数据
 * @returns {Array} realRouters  过滤之后的符合条件的路由
 * 注：这种方法不赞成使用，递归可能导致堆栈溢出从而导致结果出错
 */
export function recursionRouter( userRouter = [], allRouter = []) {
  let realRouter = []
  allRouter.forEach((v,i) => {
    userRouter.forEach((item,index) => {
      if(item.name === v.meta.name) {
        if(item.children && item.children.length > 0) {
          v.children = recursionRouter(item.children,v.children)
        }
        realRouter.push(v)
      }
    })
  })
  return realRouter
}


export function setDefaultRoute(routes) {
  routes.forEach((v,i) => {
    if(v.children && v.children.length > 0) {
      v.redirect = { name: v.children[0].name }
      setDefaultRoute(v.children)
    }
  })
}

//工具函数--树形结构遍历  [后续用到]
function treeForEach( tree, func ) {
  let node, list = [...tree]
  while (node = list.shift()) {
    func(node)
    node.children && list.push(...node.children)
  }
}

/**
 * 
 * @param {Array} userRouter 后台返回的路由权限json
 * @param {Array} allRouter 前端配置好的路由权限数据
 * @returns {Array} allRouter  过滤之后的符合条件的路由
 */
export function recursionRouterTree ( userRouter = [], allRouter = []) {
  treeForEach( allRouter, (all)=>{
    treeForEach( userRouter, (user)=> {
      if (all.meta.name == user.name) {
        all.meta.isBlock = true
      }
    })
  })
  return allRouter
}