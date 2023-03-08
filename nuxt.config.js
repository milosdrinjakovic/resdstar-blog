const pkg = require('./package')
const bodyParser = require('body-parser');
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WEB development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFH_UhlNBxhimqujQAfymKTsupjbaeKF8nN0CBba4ZKQ&s' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#3B8070',
    failedColor: '',
    height: '4px',
    duration: 5000
  },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f',
    //loadingIndicator uses only when 'mode' is single page application(spa)
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ]
  ,

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL:  process.env.BASE_URL || 'https://nuxt-blog-8b6c2-default-rtdb.europe-west1.firebasedatabase.app/',
    credential: false,

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-8b6c2-default-rtdb.europe-west1.firebasedatabase.app/',
    fbAPIKey: "AIzaSyDGAXCEWLP7jQ--vt3PWnuoEjFIArADe8Q"

  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
