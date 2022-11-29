import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { colors } from "../../../../styles/colors"
import { typography } from "../../../../styles/typography"
import { utils } from "../../../../styles/utils"
import { Button } from "../../../components/Button"
import { Announcement } from "./Announcement"

export const Hero = () => {
  const { t } = useTranslation('home');
  
  return (
      <Container>
        <TextAndCta>
        <Announcement />

        <Heading>{t('hero-title')}</Heading>

        <Subtitle>{t('hero-description')}</Subtitle>

        <ButtonContainer>
        <Button href='#' link hierarchy='primary' size='2xl' iconTrailing iconVariant={'arrow-narrow-right'}>Launch App</Button>
        </ButtonContainer>
        </TextAndCta>

        <ImageContainer>
          <img src="/assets/images/hero/cover.png" alt="Neptune" />
        </ImageContainer>
      </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding-top: 64px;
  padding-bottom: 96px;

  ${utils.fullWidthContainer};

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
    flex-direction: column;
    align-items: stretch;
  }
`

const TextAndCta = styled.div`
  flex: 1;
`

const Heading = styled.h1`
  margin-top: 16px;
  ${typography.styles.displayXL};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displayMd};
    ${typography.weights.semibold};
  }
`

const Subtitle = styled.p`
  margin-top: 24px;
  color: ${props => props.theme.secondaryColor};
  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
  ${typography.styles.textLg};
  ${typography.weights.regular};
  }
`

const ButtonContainer = styled.div`
  margin-top: 48px;
  display: inline-flex;

  @media (max-width: 768px) {
    margin-top: 32px;
    display: block;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  height: 560px;
  max-width: 100%;
  border: 1px solid ${props => props.theme.isLightMode ? colors.white : colors.gray['600']};
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 240px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`