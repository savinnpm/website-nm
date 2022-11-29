import styled from "styled-components"
import { colors } from "../../../../styles/colors"
import { typography } from "../../../../styles/typography"
import { utils } from "../../../../styles/utils"
import { Button } from "../../../components/Button"
import { Carousel } from "./Carousel"

export const WhatsNew = ({blogPosts}) => {
  return (
    <Container>
      <InnerContainer>
        <TextAndCta>
          <TextContainer>
            <Heading>What’s New?</Heading>
            <SupportingText>The latest news, updates, and announcements from our team.</SupportingText>
          </TextContainer>

          <Button href='https://blog.neptunemutual.com/' target="_blank" link hierarchy='primary' size='xl'>View All Posts</Button>
        </TextAndCta>

        <Carousel posts={blogPosts}></Carousel>
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

const TextAndCta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const TextContainer = styled.div`
  max-width: 768px;
`

const Heading = styled.h2`
  color: ${props => props.theme.color};
  
  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const SupportingText = styled.p`
  margin-top: 20px;
  color: ${props => props.theme.secondaryColor};

  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`

