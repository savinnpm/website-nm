import { data } from '../data'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import { ContentSlider } from '../ContentSlider'
import styled from 'styled-components'
import { TimelineItem } from './TimelineItem'
import { colors } from '../../../../../styles/colors'

const currentIndex = data.findIndex((x) => x.current)

const getVW = () => {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  )
}

export const MainCarousel = () => {
  const [selected, setSelected] = useState(currentIndex)
  const [shouldSetInitial, setShouldSetInitial] = useState(false)

  const sliderRef = useRef(null)

  useEffect(() => {
    // Get viewport width

    // Change initial slide to show the current item
    // Cannot use initialSlide setting in react-slick
    if (shouldSetInitial && sliderRef.current) {
      if (getVW() < 768) {
        sliderRef.current.slickGoTo(currentIndex - 1)
      }
    }
  }, [shouldSetInitial])

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    // adaptiveHeight: true,
    initialSlide: currentIndex - 5,
    slidesToShow: 7,
    slidesToScroll: 3,
    onInit: () => setShouldSetInitial(true),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipeToSlide: false,
          swipe: false,
          touchMove: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  }

  const handleContentSlideUpdate = (_idx) => {
    if (getVW() < 768) {
      const toIdx = _idx > 0 ? _idx - 1 : _idx
      sliderRef.current.slickGoTo(toIdx)
      setSelected(_idx)
      return
    }

    const toIdx = _idx > 2 ? _idx - 3 : _idx
    sliderRef.current.slickGoTo(toIdx)
    setSelected(_idx)
  }

  let passedCurrent = false

  return (
    <Container>
      <CarouselContainer>
        <TimelineInnerContainer>
          <ConnectingLine />
          <Slider {...settings} ref={sliderRef}>
            {data.map((point, idx) => {
              const isCurrent = point.current === true
              const isActive = selected === idx

              if (isCurrent) {
                passedCurrent = true
              }

              const isFuture = passedCurrent && !isCurrent

              const onSelect = () => setSelected(idx)

              return (
                <div key={point.name}>
                  <TimelineItem
                    onClick={onSelect}
                    isActive={isActive}
                    isFuture={isFuture}
                    isCurrent={isCurrent}
                    point={point}
                  />
                </div>
              )
            })}
          </Slider>
        </TimelineInnerContainer>

      </CarouselContainer>

      <ContentSlider
        activeIndex={selected}
        onContentSlideUpdate={handleContentSlideUpdate}
      />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 96px;
  overflow: hidden;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0;
  
  .slick-list {
    overflow: visible;
  }
  
  .slick-slide > div, .slick-slide > div > div {
    display: flex !important;
    height: 100% !important;
  }
/* 
  @media (max-width: 375px) {
    margin: 0 -1rem;
  }

  @media (max-width: 1365px) {
    margin: 0 -1.5rem;
  } */
`

const TimelineInnerContainer = styled.div`
  padding: 1rem 0;
  margin-bottom: 3rem;
  position: relative;
  width: 100%;
`

const ConnectingLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  height: 1px;
  width: 100%;
  background: ${props => props.theme.isLightMode ? colors.gray['400'] : colors.gray['400']};
`
