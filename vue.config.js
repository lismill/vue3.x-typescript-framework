module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  // 静态资源目录
  assetsDir: 'assets',
  /**
   * favicon.ico
   */
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  /**
   * variable
   */
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/variable/index.scss";'
      }
    }
  },
  chainWebpack: config => {
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 解决 vue-i18n 控制台警告提示
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
  }
}
