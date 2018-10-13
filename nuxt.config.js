module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ft-kanban',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    'bootstrap-vue/nuxt'
  ],
  /**
   * plugins
   */
  plugins: [
    {src: '~/plugins/persistedstate', ssr: false},
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuex-persistedstate'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
        },{
            enforce: 'pre',
            test: /\.vue$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
        })
      }
    }
  }
}

