import {
  useEffect,
  useRef
} from 'react'

import Slider from 'react-slick'
import styled from 'styled-components'

import { typography } from '../../../../../styles/typography'
import { data } from '../data'

export const ContentSlider = ({ activeIndex, onContentSlideUpdate }) => {
  const sliderRef = useRef(null)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
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
          const { name, Story } = item

          const isActive = activeIndex === i

          return (
            <SlideContent
              key={i}
              tabIndex={isActive ? undefined : '-1'}
            >
              <h3>{name}</h3>
              <Story key={`story-${i}`} />
            </SlideContent>
          )
        })}
      </Slider>
    </div>
  )
}

const SlideContent = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 64px;
  ${typography.styles.textMd};
  ${typography.weights.regular};

  @media (max-width: 1365px) {
    margin-top: 48px;
  }

  @media (max-width: 767px) {
    margin-top: 48px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  h3 {
    ${typography.styles.displayXs};
    ${typography.weights.semibold};

    @media screen and (max-width: 768px) {
      ${typography.styles.textXl};
    }
  }

  p {
    margin-top: 20px;

    &:first-child {
      margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 11px;
    }
  }

  li {
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`
