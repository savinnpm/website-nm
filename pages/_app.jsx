import { useState } from 'react'
import { appWithTranslation } from 'next-i18next'

import '@fontsource/inter/latin.css'
import 'slick-carousel/slick/slick.css'

import { ThemeProvider } from '../src/theme/ThemeContext'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { MobileNavContainer } from '../src/components/Nav/MobileNaviagtion'
import { VideosProvider } from '../src/context/VideosContext'

function MyApp ({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider>
      <VideosProvider videos={pageProps.videos}>
        <HeaderContainer>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} colored={pageProps.headerStyle === 'colored'} />
          <Border />
        </HeaderContainer>
        <MainContainer>
          <MobileNavContainer isMenuOpen={isMenuOpen} />
          <Component {...pageProps} />
        </MainContainer>
        <Footer />
      </VideosProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`

const Border = styled.div`
  mix-blend-mode: multiply;
  border-bottom: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['200'] : colors.gray['700']};
`

const MainContainer = styled.div`
`
