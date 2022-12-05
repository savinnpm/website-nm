import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setShowLoader(true))
    Router.events.on('routeChangeComplete', () => setShowLoader(false))
    Router.events.on('routeChangeError', () => setShowLoader(false))

    return () => {
      Router.events.off('routeChangeStart', () => setShowLoader(false))
      Router.events.off('routeChangeComplete', () => setShowLoader(false))
      Router.events.off('routeChangeError', () => setShowLoader(false))
    }
  }, [])

  if (!showLoader) {
    return null
  }

  return (
    <Container />
  )
}

const Container = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 800% 120%;
  animation: rainbow 4s ease infinite;

@keyframes rainbow {
  0% { background-position: 0% 50% }
  50% { background-position: 200% 50% }
  100% { background-position: 0% 50% }
}
`
