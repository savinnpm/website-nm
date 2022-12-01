import styled from 'styled-components'
import { utils } from '../../../../styles/utils'

export const Content = ({ content }) => {
  console.log(content)
  return (
    <Container>
      <InnerContainer>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`
const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`
