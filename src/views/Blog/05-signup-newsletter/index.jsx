import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

export const SignupNewsletter = () => {
  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          <Heading>Sign up for our newsletter</Heading>
          <Subtitle>The blog is the go-to location for learning about web3 and smart contract vulnerabilities, decentralized insurance, security best practices, and industry news. Enter your address to get weekly updates.</Subtitle>
        </ContentContainer>

      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 0;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-bottom: 64px;
    gap: 32px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
  border-radius: 16px;
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['25'] : colors.gray['900']};

  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const ContentContainer = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Heading = styled.h1`
  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const Subtitle = styled.p`
  margin-top: 20px;
  color: ${(props) => props.theme.secondaryColor};
  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`
