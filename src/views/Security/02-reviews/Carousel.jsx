import { useRef } from 'react'
import styled from 'styled-components'
import SlickSlider from 'react-slick'

import { colors } from '../../../../styles/colors'
import { blurs } from '../../../../styles/blurs'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'
import { Card } from './Card'

const NextArrow = (props) => {
  return (
    <ArrowContainer {...props}>
      <span>Next</span>
      <Icon size={24} variant='arrow-right' />
    </ArrowContainer>
  )
}

const PrevArrow = (props) => {
  return (
    <ArrowContainer {...props}>
      <span>Previous</span>
      <Icon size={24} variant='arrow-left' />
    </ArrowContainer>
  )
}

const Carousel = (props) => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    rows: 1,
    centerMode: false,
    lazyLoad: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      }
    ]
  }

  return (
    <Container>

      <SlickSlider
        ref={sliderRef}
        {...settings}
      >
        {props.audits.map((audit) => {
          return (
            <Card key={audit.id} audit={audit} />
          )
        })}
      </SlickSlider>

      <Arrows>
        <PrevArrow onClick={() => { sliderRef.current.slickPrev() }} />
        <NextArrow onClick={() => { sliderRef.current.slickNext() }} />
      </Arrows>

    </Container>
  )
}

const Container = styled.div`
  .slick-track {
    display: flex !important;
  }

  .slick-list {
    margin: 0 -16px;
  }

  .slick-slide {
    height: inherit !important;
    margin: 0 16px;

    > div {
      height: 100%;
    }

    &[aria-hidden="true"] {
      visibility: hidden;
      transition: visibility 0.3s 1s linear;
    }
  }
`

const ArrowContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  }

  > span {
    ${utils.srOnly};
  }
`

const Arrows = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 32px;
  justify-content: end;
`

export { Carousel }
