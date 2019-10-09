import locales from './locales'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: locales,
          dateTimeFormats: {
            en: {
              yearMonth: {
                year: 'numeric',
                month: 'short'
              }
            }
          }
        }
      }
    ],
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa'
      }
    ],
    '@nuxtjs/tailwindcss',
    [
      'nuxt-webfontloader',
      {
        google: {
          families: ['Open Sans&display=swap']
        }
      }
    ]
  ],
  purgeCSS: {
    whitelist: ['svg-inline--fa'],
    whitelistPatterns: [/shiki/, /fa-$/]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  router: {},
  generate: {
    // exclude: ['cv']
  },
  /*
   ** Build configuration
   */
  server: {
    // port: 8000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
