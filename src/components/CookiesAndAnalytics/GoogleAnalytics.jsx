import { useEffect } from 'react'
import { Router } from 'next/router'
import Script from 'next/script'

import { ga } from '../../helpers'
import { publicEnv } from '../../environment'

export const GoogleAnalytics = ({ accepted }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!accepted || !publicEnv.googleAnalyticsId) {
        return
      }
      ga.pageview(url)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [accepted])

  if (!accepted || !publicEnv.googleAnalyticsId) {
    return null
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${publicEnv.googleAnalyticsId}`} strategy='afterInteractive' />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', '${publicEnv.googleAnalyticsId}');
      `
        }}
      />
    </>
  )
}
