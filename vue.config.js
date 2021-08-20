const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
// cdn
const cdn = require('./cdn.config.js')()
// BASE_URL
const BASE_URL = process.env.NODE_ENV === 'production' ? '/xxx/': '/'

module.exports =  {
  publicPath: BASE_URL,
  devServer: {
    // development server port
    port: 8181,
    https: false,
    hotOnly: true,
    disableHostCheck: true,
    compress: false,
    proxy: {
      '/api': {
        target: process.env.APP_SITE,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // ant-design-vue 主题色配置
        modifyVars: {
          'primary-color': '#00a596',
          'link-color': '#00a596',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'analyzer') {     // 分析
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    config
      .plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })
    // config.resolve.alias
    //   .set('sub', resolve('src/sub_modules'))
  },
  configureWebpack: {
    externals: {
      dayjs: 'dayjs'
    }
  }
}
