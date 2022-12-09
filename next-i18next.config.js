
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'fr', 'de', 'id', 'it', 'ja', 'ko', 'ru', 'es', 'el', 'tr', 'vi', process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development' ? 'test' : undefined].filter(Boolean)
  },
  localePath: './public/locales'
}
