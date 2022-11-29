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
import { MobileNavContainer } from '../src/components/Nav/MobileNavContainer'

function MyApp ({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <TooltipProvider>
      <ThemeProvider>
        <HeaderContainer>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </HeaderContainer>
        <MainContainer>
          <MobileNavContainer isMenuOpen={isMenuOpen} />
          <Component {...pageProps} />
        </MainContainer>
        <Footer />
      </ThemeProvider>
    </TooltipProvider>
  )
}

export default appWithTranslation(MyApp)

const HeaderContainer = styled.div`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  box-shadow: 0 0 0 1px ${(props) => props.theme.isLightMode ? colors.gray['100'] : colors.gray['700']};
  z-index: 2;
`

const MainContainer = styled.div`
  /* padding-top: var(--header-height); */
  position: relative;
  z-index: 1;
`
