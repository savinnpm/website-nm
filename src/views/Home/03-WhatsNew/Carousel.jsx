import { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { blurs } from '../../../../styles/blurs'
import { colors } from '../../../../styles/colors'
import { Icon } from '../../../components/Icon'
import { Card } from './Card'

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  rows: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1365,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  beforeChange: console.log
}

function NextArrow(props) {
  return (
    <ArrowContainer {...props}>
      <Icon size={24} variant="arrow-right" />
    </ArrowContainer>
  )
}

function PrevArrow(props) {
  return (
    <ArrowContainer {...props}>
      <Icon size={24} variant="arrow-left" />
    </ArrowContainer>
  )
}

export const Carousel = ({ posts = [] }) => {
  const sliderRef= useRef(null)
  
  return (
    <Container>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {posts.map(post => {
          return <Card key={post.id} post={post} />
        })}

      </Slider>

      <Arrows>
        <PrevArrow onClick={() => {sliderRef.current.slickPrev()}}></PrevArrow>
        <NextArrow onClick={() => {sliderRef.current.slickNext()}}></NextArrow>
      </Arrows>

    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 64px;

  .slick-track {
    display: flex !important;
  }

  .slick-list {
    margin: 0 -16px;
  }

  .slick-slide {
    margin: 0 16px;

    &[aria-hidden="true"] {
      visibility: hidden;
    }
  }
`

const Arrows = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 32px;
`

const ArrowContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 56px;
  height: 56px;

  background-color: ${props => props.theme.isLightMode ? colors.white : colors.gray['700']};
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['50']};
  border: 1px solid ${props => props.theme.isLightMode ? colors.gray['200'] : colors.gray['600']};
  backdrop-filter: ${blurs.sm};
  border-radius: 50%;

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['600']};
    color: ${props => props.theme.isLightMode ? colors.gray['700'] : colors.white};
  }

  :disabled {
    border: 1px solid ${props => props.theme.isLightMode ? colors.gray['100'] : colors.gray['600']};
    color: ${props => props.theme.isLightMode ? colors.gray['300'] : colors.gray['600']};
  }
`