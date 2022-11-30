import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { useVideosContext } from '../../../context/VideosContext'
import { Video } from './Video'

export const RecentVideos = () => {
  const videos = useVideosContext()

  return (
    <Container>
      <InnerContainer>
        <Heading>Recent Videos</Heading>

        <VideosContainer>
          {videos && videos.map((video, idx) => {
            return <Video key={idx} video={video} />
          })}
        </VideosContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
`

const InnerContainer = styled.div`
  border-top: 1px solid ${props => props.isLightMode ? colors.gray['300'] : colors.gray['300']};

  padding-top: 56px;
  padding-bottom: 56px;
  
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const Heading = styled.h2`
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.semibold};

`

const VideosContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 32px;
`
