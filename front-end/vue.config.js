module.exports = {
  // 配置代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3300',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      //设置文件夹别名
      alias: {
        assets: "@/assets",
        components: "@/components",
        pages: "@/pages",
        router: "@/router",
        store: "@/store",
        utils: "@/utils",
        api: "@/api"
      }
    }
  }
}