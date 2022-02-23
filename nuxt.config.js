module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '好奇心に殺される。- pon のテックブログ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:url', property: 'og:url', content: 'https://po3rin.com' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://pon-blog-media.s3-ap-northeast-1.amazonaws.com/top.png'
      },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'OGP image' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '好奇心に殺される。- pon のテックブログ'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ソフトウェアエンジニア pon のテックブログです。サーバーサイド、インフラなどの情報を中心に記事にしています。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '好奇心に殺される。- pon のテックブログ'
      },
      { property: 'og:locale', content: 'ja_JP' },
      {
        hid: 'og:site_name',
        name: 'twotter:image',
        content:
          'https://pon-blog-media.s3-ap-northeast-1.amazonaws.com/top.png'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@po3rin' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00ffc4', height: '8px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/prism', '~/plugins/markdownit'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',

    // by developer
    // '@nuxtjs/markdownit'
    '@nuxtjs/style-resources',
    'nuxt-lazy-load',
    '@nuxtjs/google-analytics'
  ],
  styleResources: { scss: ['~assets/styles/_var.scss'] },
  webfontloader: {
    // google: {
    //   families: ['M+PLUS+Rounded+1c']
    // }
  },
  googleAnalytics: { id: 'UA-47360721-3' },
  purgeCSS: { whitelistPatternsChildren: [/token$/] },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: (function() {
      if (process.env.NODE_ENV === 'production') {
        return 'https://blog-api-gjqqouyuca-an.a.run.app'
      }
      return 'https://blog-api-gjqqouyuca-an.a.run.app'
    })(),
    browserBaseURL: (function() {
      if (process.env.NODE_ENV === 'production') {
        return 'https://blog-api-gjqqouyuca-an.a.run.app'
      }
      return 'https://blog-api-gjqqouyuca-an.a.run.app'
    })()
  },
  markdownit: {
    // preset: 'default',
    linkify: true,
    // breaks: true,
    use: [
      'markdown-it-anchor',
      'markdown-it-katex',
      'markdown-it-footnote',
      'markdown-it-table-of-contents',
      {
        includeLevel: [2, 3], // h2, h3を目次として表示する
        containerHeaderHtml: '<div class="toc-container-header">Contents</div>' // 目次の見出しの内容を設定する
      }
    ],
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
