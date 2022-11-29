import styled, { useTheme } from 'styled-components'
import { utils } from '../../../styles/utils'

import { LocaleSelector } from '../LocaleSelector'
import { ThemeToggle } from '../ThemeToggle'
import NpmLogo from '../logos/npm-full'
import NpmLogoInverse from '../logos/npm-full-inverse'
import Link from 'next/link'
import { NavMenuButton } from '../Nav/NavMenuButton'
import { typography } from '../../../styles/typography'

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const theme = useTheme()

  return (
    <StyledHeader>
      <InnerContainer>
        <div>
          <LogoContainer href='/'>
            {theme.isLightMode ? <NpmLogo /> : <NpmLogoInverse />}
          </LogoContainer>
        </div>

        <Actions>
          <LocaleSelector />
          <ThemeToggle />
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

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
   display: none; 
  }

  color: ${props => props.theme.secondaryColor};
  
  ${typography.styles.textMd};
  ${typography.weights.semibold};
`
