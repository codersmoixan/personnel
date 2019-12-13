module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets'
      }
    }
  },
  lintOnSave: false, // 是否开启 eslint 语法检测
  // outputDir: 'dist',   //build输出目录
  // devServer: {
  //   open: false, //是否自动弹出浏览器页面
  //   host: "localhost",
  //   port: '8080',
  //   https: false,   //是否使用https协议
  //   hotOnly: false, //是否开启热更新
  //   proxy: { // 解决跨域问题
  //     '/api': {
  //       target: 'http://121.41.67.25:8061', //API服务器的地址
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}