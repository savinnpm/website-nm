import styled from "styled-components"
import { colors, primaryColorKey } from "../../../../styles/colors"
import { typography } from "../../../../styles/typography"
import { utils } from "../../../../styles/utils"
import { Button } from "../../../components/Button"
import { Features } from "./Features"

export const ParametricCovers = () => {
  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <Subheading>Coming Soon</Subheading>
          <Heading>Decentralized Parametric Covers</Heading>
          <SupportingText>Neptune Mutual Protocol offers a couple of different flavors of decentralized parametric covers.</SupportingText>
        </TextContainer>

        <Features>

        </Features>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};

  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 768px) {
    gap: 48px;
  }
`

const TextContainer = styled.div`
  max-width: 768px;
`

const Subheading = styled.p`
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.textSm};
  }
`

const Heading = styled.h2`
  margin-top: 12px;
  color: ${props => props.theme.color};
  
  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const SupportingText = styled.p`
  margin-top: 20px;
  color: ${props => props.theme.secondaryColor};

  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`

