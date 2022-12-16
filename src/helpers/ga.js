export const pageview = (url) => {
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    throw Error('GA: not configured')
  }

  return window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    path_url: url
  })
}
