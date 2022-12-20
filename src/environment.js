const publicEnv = {
  clarityTrackingCode: process.env.NEXT_PUBLIC_CLARITY_TRACKING_CODE,
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  domain: process.env.NEXT_PUBLIC_DOMAIN_NAME || 'https://neptunemutual.com',
  formsApiServer: process.env.NEXT_PUBLIC_FORMS_API_SERVER,
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
}

module.exports = {
  publicEnv
}
