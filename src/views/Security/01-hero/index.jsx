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
          <Tag>{t('HEADER_TAG')}</Tag>
          <HeaderTitle>{t('HEADER_TITLE')}</HeaderTitle>
          <HeaderContent>
            {t('HEADER_TEXT')}
          </HeaderContent>
        </Content>
        <ImageContainer>
          <Image alt='' src='/assets/images/hero/shield-2.webp' width='306' height='306' />
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
  justify-content: start;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
    flex-direction: column;
    align-items: stretch;
  }
`

const Content = styled.div`
  width: 768px;
  margin-right: 91px;

  @media (max-width: 768px) {
    width: auto;
    margin-right: 0;
  }
`

const Tag = styled.span`
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};
  ${typography.weights.semibold}
  ${typography.styles.textMd}
  margin-bottom: 12px;
  display: block;
`
const HeaderTitle = styled.h1`
  color: ${props => props.theme.isLightMode ? colors.gray['900'] : colors.white};
  margin-bottom: 24px;
  ${typography.styles.displayLg}
  ${typography.weights.semibold}


  @media (max-width: 768px) {
    ${typography.styles.displayMd};
  }
`

const HeaderContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray['600'] : colors.gray['25']};
  ${typography.styles.textXl}
  ${typography.weights.regular}
`

const ImageContainer = styled.div`
  text-align: center;
`

export { Hero }
