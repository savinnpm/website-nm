import Image from 'next/image'
import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { getBlurDataURL } from '../../../helpers/images'

const Hero = () => {
  const { t } = useTranslation('careers')

  return (
    <Container>
      <InnerContainer>
        <Content>
          <Subheading>{t('HEADER_TAG')}</Subheading>
          <HeaderTitle>{t('HEADER_TITLE')}</HeaderTitle>
          <HeaderContent>
            {t('HEADER_TEXT_1')}<br /><br />
            {t('HEADER_TEXT_2')}<br /><br />
            {t('HEADER_TEXT_3')}
          </HeaderContent>
        </Content>
        <ImageContainer>
          <Image
            alt='' src='/assets/images/hero/careers.webp'
            fill loading='eager' priority
            sizes='(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 640px'
            placeholder='blur'
            blurDataURL={getBlurDataURL(1280, 1280)}
          />
        </ImageContainer>

      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['25'] : colors.gray['900']};
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 128px;
  padding-top: 96px;
  padding-bottom: 96px;
  
  ${utils.fullWidthContainer};
  
  @media (max-width: 768px) {
    gap: 64px;
    padding-top: 64px;
    padding-bottom: 64px;
    flex-direction: column;
    align-items: stretch;
  }
`

const Content = styled.div`
  flex: 1;
`

const Subheading = styled.span`
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};
  ${typography.weights.semibold}
  ${typography.styles.textMd}
  display: block;
`
const HeaderTitle = styled.h1`
  margin-top: 12px;
  color: ${props => props.theme.color};
  ${typography.styles.displayLg}
  ${typography.weights.semibold}


  @media (max-width: 768px) {
    ${typography.styles.displayMd};
  }
`

const HeaderContent = styled.p`
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

const ImageContainer = styled.div`
  flex: 1;
  max-width: 100%;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    flex: 1 0 320px;
    height: 320px;
    max-width: none;
    margin-left: -16px;
    margin-right: -16px;
  }

  img {
    object-position: top center;
    object-fit: cover;
  }
`

export { Hero }
