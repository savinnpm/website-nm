import { useEffect, useRef } from 'react'
import { data } from '../data'

import Slider from 'react-slick'
import styled from 'styled-components'

export const ContentSlider = ({ activeIndex, onContentSlideUpdate }) => {
  const sliderRef = useRef(null)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    afterChange: (idx) => onContentSlideUpdate(idx),
    arrows: false
  }

  useEffect(() => {
    sliderRef.current.slickGoTo(activeIndex)
  }, [activeIndex])

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => {
          const { name, DescComponent } = item

          const isActive = activeIndex === i

          return (
            <SlideContent
              key={i}
              tabIndex={isActive ? undefined : '-1'}
            >
              <h3>{name}</h3>
              <DescComponent />
            </SlideContent>
          )
        })}
      </Slider>
    </div>
  )
}

const SlideContent = styled.div`
  padding: 64px;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;

  @media (max-width: 1365px) {
    padding: 48px 0 0;
  }

  @media (max-width: 767px) {
    padding: 36px 0 0;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }

  p {
    margin-top: 18px;

    &:first-child {
      margin-top: 18px;
    }
  }

  li {
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`
