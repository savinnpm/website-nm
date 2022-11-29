import styled from "styled-components"
import { colors, primaryColorKey } from "../../../../styles/colors"
import { typography } from "../../../../styles/typography"
import { utils } from "../../../../styles/utils"
import { Button } from "../../../components/Button"

export const NftCollection = () => {
  return (
    <Container>
      <InnerContainer>
        <TextAndCta>
          <TextContainer>
            <Subheading>Coming Soon</Subheading>
            <Heading>NFT Series Collection</Heading>
            <SupportingText>We are developing an amazing collection of NFTs for our community. You can expect both tradeable and soulbound versions, some of which may have an economic benefit and utility within the marketplace. Be sure to join our Discord community to keep up to date with our NFT news.</SupportingText>
          </TextContainer>

          <Button href='#' link hierarchy='primary' size='xl' iconTrailing iconVariant={'discord'}>Join Our Discord</Button>
        </TextAndCta>

        <ImageContainer>
          <img src={`/assets/images/nft/promo.png`} alt='nft collection' />
        </ImageContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 144px;
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`

const TextAndCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

const TextContainer = styled.div`
  text-align: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
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

const ImageContainer = styled.div`
  margin-top: 64px;
  height: 480px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 360px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;