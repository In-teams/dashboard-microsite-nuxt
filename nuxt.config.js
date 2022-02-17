export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'microsite-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
      }
    ]
  },
  // loading: '~/components/molecules/Loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { proxy: true },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  proxy: {
    '/api/v1/': {
      target:
        process.env.NODE_ENV === 'production'
          ? 'https://api.apolo.inosis.id/api/v1/'
          : 'http://localhost:2000/api/v1/',
      pathRewrite: { '^/api/v1/': '' }
    },
    '/api/v2/': {
      target:
        process.env.NODE_ENV === 'production'
          ? 'https://api.apolo.v2.inosis.id/api/v2/'
          : 'http://localhost:2000/api/v2/',
      pathRewrite: { '^/api/v2/': '' }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
