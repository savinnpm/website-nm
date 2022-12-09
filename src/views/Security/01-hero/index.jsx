import Image from 'next/image'
import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

const Hero = () => {
  const { t } = useTranslation('security')

  return (
    <Container>
      <InnerContainer>
        <Content>
          <Subheader>{t('HEADER_TAG')}</Subheader>
          <HeaderTitle>{t('HEADER_TITLE')}</HeaderTitle>
          <HeaderContent>
            {t('HEADER_TEXT')}
          </HeaderContent>
        </Content>
        <ImageContainer>
          <Image alt='Sheild' src='/assets/images/hero/shield.png' width={300} height={300} />
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
  ${utils.fullWidthContainer};
  justify-content: flex-start;
  padding-top: 100px;
  padding-bottom: 100px;
  gap: 40px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 0;
    gap: 64px;
    flex-direction: column;
    align-items: stretch;
  }
`

const Content = styled.div`
  max-width: 768px;
`

const Subheader = styled.span`
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
    ${typography.weights.semibold}
  }
`

const HeaderContent = styled.p`
  margin-top: 24px;
  color: ${props => props.theme.secondaryColor};
  ${typography.styles.textXl}
  ${typography.weights.regular}
  
  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular}
  }
`

const ImageContainer = styled.div`
  text-align: center;
  height: 314px;
  flex: 1 0 auto;

  @media (max-width: 768px) {
    margin-left: -16px;
    margin-right: -16px;
    height: 320px;
  }

  img {
    object-fit: contain;
  }
`

export { Hero }
