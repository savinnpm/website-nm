
import styled from 'styled-components'

import { utils } from '../../../../styles/utils'

import { About } from './About'
import { Carousel } from './Carousel'

export const Reviews = (props) => {
  return (
    <Review>
      <AboutContainer>
        <About />
      </AboutContainer>

      <CarouselContainer>
        <Carousel audits={props.audits} />
      </CarouselContainer>

    </Review>
  )
}

const Review = styled.div`
  display: flex;
  ${utils.fullWidthContainer}
  padding-bottom: 96px;
  padding-top: 96px;
  gap: 32px;
  
  @media (max-width: 768px) {
    padding-bottom: 64px;
    padding-top: 64px;
    flex-direction: column;
    gap: 48px;
  }
`

const AboutContainer = styled.div`
  width: 33%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const CarouselContainer = styled.div`
  width: 67%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
