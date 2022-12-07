import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { utils } from '../../../styles/utils'
import { RiskWarning } from './RiskWarning'
import { Navigation } from './Navigation'
import { SocialLinks } from './SocialLinks'
import { typography } from '../../../styles/typography'

export const Footer = () => {
  return (
    <StyledFooter>
      <InnerContainer>

        <Navigation />

        <RiskWarning />

        <CopyrightContainer>
          <CopyrightText>Neptune Mutual &copy; 2022 </CopyrightText>
          <SocialLinks />
        </CopyrightContainer>
      </InnerContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding-top: 64px;
  padding-bottom: 48px;
  background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['900']};

  @media (max-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};

  a {
    :hover {
      text-decoration: underline;
    }
  }
`

const CopyrightContainer = styled.div`
  margin-top: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`

const CopyrightText = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.white};

  ${typography.styles.textMd};
  ${typography.weights.regular};

`
