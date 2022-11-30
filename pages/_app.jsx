import { useState } from 'react'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { appWithTranslation } from 'next-i18next'

import '@fontsource/inter/latin.css'
import 'slick-carousel/slick/slick.css'

import { ThemeProvider } from '../src/theme/ThemeContext'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { MobileNavContainer } from '../src/components/Nav'
import { VideosProvider } from '../src/context/VideosContext'

function MyApp ({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <TooltipProvider>
      <ThemeProvider>
        <VideosProvider videos={pageProps.videos}>
          <HeaderContainer>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </HeaderContainer>
          <MainContainer>
            <MobileNavContainer isMenuOpen={isMenuOpen} />
            <Component {...pageProps} />
          </MainContainer>
          <Footer />
        </VideosProvider>
      </ThemeProvider>
    </TooltipProvider>
  )
}

export default appWithTranslation(MyApp)

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['100'] : colors.gray['700']};
  z-index: 1;
`

const MainContainer = styled.div`
`
