import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../../styles/colors'
import { typography } from '../../../../../styles/typography'
import { useVideosContext } from '../../../../context/VideosContext'
import { Icon } from '../../../Icon'
import { Video } from '../../DesktopSubmenu/Video'

export const VideosSection = ({ section }) => {
  const { t } = useTranslation('common')
  const { videos } = useVideosContext()

  console.log(section)
  return (
    <Container>
      <Title>{t(section.title)}</Title>

      {videos && (
        <Content>
          {videos.map((video, idx) => {
            return <Video key={idx} video={video} />
          })}
        </Content>
      )}

      {section.more && (
        <More href={section.more.title} rel='noreferrer' target='_blank'>
          {t(section.more.title)} <Icon size={20} variant='arrow-right' />
        </More>
      )}
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['900']};
  padding: 32px 0;
`

const Title = styled.h4`
  padding: 0 16px;
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['500']};

  ${typography.styles.textSm};
  ${typography.weights.semibold};
`

const Content = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const More = styled.a`
  margin-top: 16px;
  padding: 0 16px;
  display: inline-flex;
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['500']};
  gap: 8px;

  ${typography.styles.textSm};
  ${typography.weights.semibold};
`
