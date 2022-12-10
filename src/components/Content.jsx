import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const HtmlContent = ({ content }) => {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}

const Container = styled.div`
  & div {
    ${typography.styles.textLg};
    ${typography.weights.regular};
    color: ${props => props.theme.secondaryColor};

    p{
      display: block;
      margin: 20px 0;

      & strong {
        ${typography.weights.bold};
      }
     
      & a{
        & :hover{
          text-decoration: underline;
        }
      }
    }

    h2 {
      margin-top: 40px;
      ${typography.styles.displaySm};
      ${typography.weights.semibold};
    }

    h3 {
      margin-top: 32px;
      ${typography.styles.displayXs};
      ${typography.weights.semibold};
    }

    ul, ol {
      margin-top: 20px;
      padding-left: 20px;
    }

    li {
      line-height: 28px;
    }

    blockquote {
      border-left: 2px solid ${props => props.theme.primaryColor};
      padding-left: 20px;
      ${typography.styles.displayXs};
      ${typography.weights.medium};
      font-style: italic;
    }

    img {
      display: inline-block;
      margin: 1rem auto;
      height: auto;
      width: 100%;
      object-fit: contain;
    }

    & > *:first-child {
      margin-top: 0;
      padding-top: 0;
    }
  }
`
