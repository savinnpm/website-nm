import styled from 'styled-components'
import { utils } from '../../../../styles/utils'
import { typography } from '../../../../styles/typography'

export const Content = ({ content }) => {
  return (
    <Container>
      <InnerContainer>
        <div className='article' dangerouslySetInnerHTML={{ __html: content }} />
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

  & div {
    p{
      display: block;
      margin: 20px 0;
      ${typography.styles.textLg}
      ${typography.weights.regular}

      & strong {
        ${typography.weights.bold}
      }
     
      & a{
        & :hover{
          text-decoration: underline;
        }
      }
    }

    h2 {
      margin-top: 40px;
      ${typography.styles.displaySm}
      ${typography.weights.semibold}
    }

    h3 {
      margin-top: 32px;
      ${typography.styles.displayXs}
      ${typography.weights.semibold}
    }
  }
`
