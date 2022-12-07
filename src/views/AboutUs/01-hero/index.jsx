import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

import { useVideosContext } from '../../../context/VideosContext'
const YoutubeId = 'GeqjuV1u4UI'

const Hero = () => {
  const { t } = useTranslation('about')
  const { setId } = useVideosContext()

  return (
    <Container>
      <InnerContainer>
        <Content>
          <Tag>{t('HEADER_TAG')}</Tag>
          <HeaderTitle>{t('HEADER_TITLE')}</HeaderTitle>
          <HeaderContent>
            {t('HEADER_TEXT')}
          </HeaderContent>
          <VideoContainer onClick={() => { setId(YoutubeId) }}>
            <img alt='' src='/assets/images/hero/player.webp' />
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
  width: 887px;
  height: 499px;
  
  position: absolute;
  margin: 0 auto;
  
  top: 292px;
  left: 0;
  right: 0;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  backdrop-filter: blur(8px);

  img {
    width: 887px;
    height: 499px;
  }

  @media (max-width: 887px) {
    top: 320px;
    width: auto;
    height: auto;
    
    img {
      width: auto;
      height: auto;
    }
  }
`

export { Hero }
