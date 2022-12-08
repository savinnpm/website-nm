import { useEffect, useState } from 'react'
import { appWithTranslation } from 'next-i18next'

import '@fontsource/inter/latin.css'
import 'slick-carousel/slick/slick.css'

import { ThemeProvider } from '../src/theme/ThemeContext'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { MobileNavContainer } from '../src/components/Nav/MobileNavigation'
import { VideosProvider } from '../src/context/VideosContext'
import { PageLoader } from '../src/components/PageLoader'
import { Router } from 'next/router'

function MyApp ({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Close menu after navigating to a new page
    const onClose = () => setIsMenuOpen(false)
    Router.events.on('routeChangeComplete', onClose)

    return () => {
      Router.events.off('routeChangeComplete', onClose)
    }
  }, [])

  return (
    <ThemeProvider>
      <VideosProvider videos={pageProps.videos}>
        <HeaderContainer>
          <PageLoader />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} colored={pageProps.headerStyle === 'colored'} />
          <Border />
        </HeaderContainer>
        <MainContainer>
          <MobileNavContainer isMenuOpen={isMenuOpen} />
          <Component {...pageProps} />
        </MainContainer>
        <Footer pages={pageProps.pages} />
      </VideosProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Border = styled.div`
  mix-blend-mode: multiply;
  border-bottom: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['200'] : colors.gray['700']};
`

const MainContainer = styled.div`
  padding-top: var(--header-height);
`
