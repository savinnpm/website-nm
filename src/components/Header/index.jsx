import styled, { useTheme } from 'styled-components'
import { utils } from '../../../styles/utils'

import { LocaleSelector } from '../LocaleSelector'
import { ThemeSelector } from '../ThemeSelector'
import NpmLogo from '../logos/npm-full'
import NpmLogoInverse from '../logos/npm-full-inverse'
import Link from 'next/link'
import { NavMenuButton } from '../Nav/NavMenuButton'
import { DesktopNavMenuItem } from '../Nav/DesktopNavMenuItem'

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const theme = useTheme()

  return (
    <StyledHeader>
      <InnerContainer>
        <LeftContainer>
          <LogoContainer href='/'>
            {theme.isLightMode ? <NpmLogo /> : <NpmLogoInverse />}
          </LogoContainer>
          <NavLinksContainer>
            <DesktopNavMenuItem />
          </NavLinksContainer>
        </LeftContainer>

        <Actions>
          <LocaleSelector />
          <ThemeSelector />
        </Actions>

        <NavMenuButton onClick={() => setIsMenuOpen(prev => !prev)} isOpen={isMenuOpen} />
      </InnerContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`  
  background-color: ${props => props.theme.primaryBackgroundColor};
`

const InnerContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ${utils.fullWidthContainer};

  @media (max-width: 768px) {
    padding: 16px 12px 16px 16px;
  }
`

const LogoContainer = styled(Link)`
  display: flex;
`

const LeftContainer = styled.div`
  display: flex;
  gap: 40px;
`

const NavLinksContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
  display: none; 
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
   display: none; 
  }
`
