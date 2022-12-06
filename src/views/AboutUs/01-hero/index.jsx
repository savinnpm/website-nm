import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

const Hero = () => {
  const { t } = useTranslation('about')

  return (
    <Container>
      <InnerContainer>
        <Content>
          <Tag>{t('HEADER_TAG')}</Tag>
          <HeaderTitle>{t('HEADER_TITLE')}</HeaderTitle>
          <HeaderContent>
            {t('HEADER_TEXT')}
          </HeaderContent>
          <VideoContainer>
            <Video width='870' height='498' src='https://www.youtube.com/embed/GeqjuV1u4UI' title='Neptune Mutual: Reduce Your Exposure to Crypto Market Risks' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
          </VideoContainer>
        </Content>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['25'] : colors.gray['900']};
`

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 56px;
  padding-bottom: 255px;

  ${utils.fullWidthContainer};

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
    align-items: stretch;
  }
`

const Content = styled.div`
  text-align: center;
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
  max-width: 768px;
  color: ${props => props.theme.isLightMode ? colors.gray['600'] : colors.gray['25']};
  ${typography.styles.textXl}
  ${typography.weights.regular}
`

const VideoContainer = styled.div`
  text-align: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 292px;
  left: 0;
  right: 0;

  width: 887px;
  height: 499px;

  border-radius: 10px;
  display: block;
  overflow: hidden;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  backdrop-filter: blur(8px);
`

const Video = styled.iframe`

  width: 887px;
  height: 499px;

  @media (max-width: 887px) {
    width: 80%;
  }

`

export { Hero }
