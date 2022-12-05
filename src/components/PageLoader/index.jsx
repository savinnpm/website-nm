import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    const handleShow = () => setShowLoader(true)
    const handleHide = () => setShowLoader(false)

    Router.events.on('routeChangeStart', handleShow)
    Router.events.on('routeChangeComplete', handleHide)
    Router.events.on('routeChangeError', handleHide)

    return () => {
      Router.events.off('routeChangeStart', handleShow)
      Router.events.off('routeChangeComplete', handleHide)
      Router.events.off('routeChangeError', handleHide)
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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(120deg, #444ce7, #1ddde8, #1ddde8, #444ce7,  #444ce7);
  background-size: 800% 120%;
  animation: rainbow 4s ease infinite;

  @keyframes rainbow {
    0% { background-position: 0% 50% }
    50% { background-position: 200% 50% }
    100% { background-position: 0% 50% }
  }
`
