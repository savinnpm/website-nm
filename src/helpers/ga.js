export const pageview = (url) => {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    return window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      path_url: url
    })
  }

  return null
}
