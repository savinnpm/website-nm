import styled, { useTheme } from 'styled-components'
import { utils } from '../../../styles/utils'

import { LocaleSelector } from '../LocaleSelector'
import { ThemeSelector } from '../ThemeSelector'
import NpmLogo from '../logos/npm-full'
import NpmLogoInverse from '../logos/npm-full-inverse'
import Link from 'next/link'
import { NavMenuButton } from '../Nav/NavMenuButton'
import { DesktopNavMenu } from '../Nav/DesktopNavMenu'
import { colors, primaryColorKey } from '../../../styles/colors'

export const Header = ({ isMenuOpen, setIsMenuOpen, colored }) => {
  const theme = useTheme()

  return (
    <StyledHeader colored={colored}>
      <InnerContainer>
        <LeftContainer>
          <LogoContainer href='/'>
            <span>Neptune Mutual</span>
            {theme.isLightMode ? <NpmLogo /> : <NpmLogoInverse />}
          </LogoContainer>
          <DesktopNavMenu />
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
  background-color: ${props => props.colored
  ? (props.theme.isLightMode ? colors[primaryColorKey]['25'] : colors.gray['900'])
  : undefined};
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

  > span {
    ${utils.srOnly};
  }
`

const LeftContainer = styled.div`
  display: flex;
  gap: 40px;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
   display: none; 
  }
`
