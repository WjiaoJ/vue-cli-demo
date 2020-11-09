module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://....',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  productionSourceMap: false,
  pwa: {
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      skipWaiting: true,
      clientsClaim: true,
      importWorkboxFrom: 'local',
      importsDirectory: 'js',
      navigateFallback: '/',
      navigateFallbackBlacklist: [/\/api\//]
    }
  }
}
