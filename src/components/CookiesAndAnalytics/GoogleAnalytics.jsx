import { useEffect } from 'react'
import { Router } from 'next/router'
import Script from 'next/script'

import { ga } from '../../helpers'

export const GoogleAnalytics = ({ accepted }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!accepted || !process.env.NEXT_PUBLIC_GA_ID) {
        return
      }
      ga.pageview(url)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [accepted])

  if (!accepted || !process.env.NEXT_PUBLIC_GA_ID) {
    return null
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy='afterInteractive' />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `
        }}
      />
    </>
  )
}
