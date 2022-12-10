import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Button } from '../../../components/Button'
import { getBlurDataURL } from '../../../helpers/images'
import { Announcement } from './Announcement'

export const Hero = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <TextAndCta>
        <Announcement />

        <Heading>{t('HERO_TITLE')}</Heading>

        <Subtitle>{t('HERO_DESCRIPTION')}</Subtitle>

        <ButtonContainer>
          <Button
            href='https://app.neptunemutual.com/'
            as='a'
            target='_blank'
            hierarchy='primary'
            size='2xl'
            iconTrailing
            iconVariant='arrow-narrow-right'
          >
            {t('LAUNCH_APP')}
          </Button>
        </ButtonContainer>
      </TextAndCta>

      <ImageContainer>
        <Image
          src='/assets/images/hero/cover.webp' alt='A portrait of the god Neptune holding a trident.' fill loading='eager' priority
          sizes='(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 640px'
          placeholder='blur'
          blurDataURL={getBlurDataURL(1280, 1280)}
        />
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
  color: ${(props) => props.theme.secondaryColor};
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
  border: 1px solid ${(props) => (props.theme.isLightMode ? colors.gray['600'] : colors.gray['600'])};
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));

  @media (max-width: 768px) {
    flex: 1 0 320px;
    height: 320px;
    max-width: none;
    margin-left: -16px;
    margin-right: -16px;
  }
  
  position: relative;
  img {
    object-position: top center;
    object-fit: cover;
  }
`
