import { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { blurs } from '../../../../styles/blurs'
import { colors } from '../../../../styles/colors'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'
import { Card } from './Card'

function NextArrow (props) {
  return (
    <ArrowContainer {...props}>
      <span>Next</span>
      <Icon size={24} variant='arrow-right' />
    </ArrowContainer>
  )
}

function PrevArrow (props) {
  return (
    <ArrowContainer {...props}>
      <span>Previous</span>
      <Icon size={24} variant='arrow-left' />
    </ArrowContainer>
  )
}

export const Carousel = ({ ecosystems }) => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    rows: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  }

  return (
    <Container>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {ecosystems.map(ecosystem => {
          return <Card key={ecosystem.id} ecosystem={ecosystem}>{ecosystem.content}</Card>
        })}
      </Slider>

      <Arrows>
        <PrevArrow onClick={() => { sliderRef.current.slickPrev() }} />
        <NextArrow onClick={() => { sliderRef.current.slickNext() }} />
      </Arrows>

    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding-top: 32px;
  padding-bottom: 16px;
  width: 100%;

  .slick-slider {
    padding-bottom: 48px;
  }

  .slick-track {
    display: flex !important;
    align-items: center;
  }

  .slick-list {
    overflow: visible;
    /* gap between slides */
    margin: 0 -16px;
  }

  .slick-slide {
    margin: 0 16px;
  }
`

const Arrows = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`

const ArrowContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 56px;
  height: 56px;
  cursor: pointer;

  background-color: ${props => props.theme.isLightMode ? colors.white : colors.gray['700']};
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['50']};
  border: 1px solid ${props => props.theme.isLightMode ? colors.gray['200'] : colors.gray['600']};
  backdrop-filter: ${blurs.sm};
  border-radius: 50%;

  :not(:disabled):hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['600']};
    color: ${props => props.theme.isLightMode ? colors.gray['700'] : colors.white};
  }

  :disabled {
    border: 1px solid ${props => props.theme.isLightMode ? colors.gray['100'] : colors.gray['600']};
    color: ${props => props.theme.isLightMode ? colors.gray['300'] : colors.gray['600']};
    cursor: not-allowed;
  }

  > span {
    ${utils.srOnly};
  }
`
