module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development' ? 'test' : undefined].filter(Boolean)
  },
  localePath: './public/locales'
}
