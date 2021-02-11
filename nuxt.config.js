export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hatu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
    '@/assets/materialdesignicons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/buefy'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],

  axios: {
    proxy: true
  },
  
  proxy: {   
    '/domria/': { target: 'https://dom.ria.com/uk/novostroyki/', pathRewrite: {'^/domria/': ''}, changeOrigin: true },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
