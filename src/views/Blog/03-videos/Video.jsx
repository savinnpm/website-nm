import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import PlayIcon from '../../../components/Icon/custom/PlayIcon'

export const Video = ({ video }) => {
  return (
    <Container onClick={() => { console.log(video.videoId) }}>
      <Thumbnail>
        <img src={`/${video.image}`} alt={video.title} />
        <Overlay>
          <PlayIcon />
        </Overlay>
      </Thumbnail>
      <Content>
        <Title>{video.title}</Title>
        <SupportingText>{video.description.text.substr(0, 56)}</SupportingText>
      </Content>
    </Container>
  )
}

const Container = styled.button`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 24px;
`

const Thumbnail = styled.div`
  overflow: hidden;
  position: relative;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  fill-opacity: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;

  button:hover & {
    fill-opacity: 0.5;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h3`
  color: ${props => props.theme.color};

  ${typography.styles.displayXs};
  ${typography.weights.semibold};
`

const SupportingText = styled.p`
  margin-top: 4px;
  color: ${props => props.theme.secondaryColor};

  ${typography.styles.textSm};
  ${typography.weights.regular};
`
