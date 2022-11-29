import styled, { useTheme } from "styled-components"
import { colors } from "../../../styles/colors"
import { utils } from "../../../styles/utils"

import { LocaleSelector } from "../LocaleSelector"
import { ThemeToggle } from "../ThemeToggle"
import NpmLogo from "../logos/npm-full"
import NpmLogoInverse from "../logos/npm-full-inverse"
import Link from "next/link"
import { NavMenuButton } from "../Nav/NavMenuButton"

export const Header = ({isMenuOpen, setIsMenuOpen}) => {
  const theme = useTheme()

  return (
    <StyledHeader>
      <InnerContainer>
        <div>
          <LogoContainer href={'/'}>
            {theme.isLightMode ? <NpmLogo /> : <NpmLogoInverse />}
          </LogoContainer>
        </div>

        <Actions>
          <LocaleSelector/>
          <ThemeToggle />
        </Actions>

        <NavMenuButton onClick={() => setIsMenuOpen(prev => !prev)} isOpen={isMenuOpen}/>
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
`

const LogoContainer = styled(Link)`
  display: block;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
   display: none; 
  }
`
