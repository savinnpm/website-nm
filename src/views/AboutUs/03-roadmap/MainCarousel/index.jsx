import { data } from '../data'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import { ContentSlider } from '../ContentSlider'
import styled from 'styled-components'
import { TimelineItem } from './TimelineItem'

const currentIndex = data.findIndex((x) => x.current)
const DESKTOP_INITIAL_SLIDE = currentIndex - 5
const MOBILE_INITIAL_SLIDE = currentIndex - 1

const getVW = () => {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  )
}

export const MainCarousel = () => {
  const [selected, setSelected] = useState(currentIndex)
  const [initialized, setInitialized] = useState(false)
  // const [sliderIndex, setSliderIndex] = useState(DESKTOP_INITIAL_SLIDE)

  const sliderRef = useRef(null)

  // Just some random code to avoid linting errors
  // if (typeof sliderIndex === 'undefined') {
  //   console.log(sliderIndex)
  // }

  useEffect(() => {
    // Change initial slide to show the current item on mobile
    // Reason: Cannot use different initialSlide for mobile
    if (initialized && sliderRef.current) {
      if (getVW() < 768) {
        sliderRef.current.slickGoTo(MOBILE_INITIAL_SLIDE)
      } else {
        // This is not required. But it fixes a strange bug for now.
        sliderRef.current.slickGoTo(DESKTOP_INITIAL_SLIDE)
      }
    }
  }, [initialized])

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    initialSlide: DESKTOP_INITIAL_SLIDE,
    slidesToShow: 7,
    slidesToScroll: 7,
    // afterChange: (index) => setSliderIndex(index),
    onInit: () => setInitialized(true),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          // @todo: check for usability problem, we can slide and click on same thing
          // swipeToSlide: false,
          // swipe: false,
          // touchMove: false,
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
          <Slider {...settings} ref={sliderRef}>
            {data.map((point, idx, points) => {
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
                    index={idx}
                    totalCount={points.length}
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

  @media (max-width: 768px) {
    margin-top: 62px;
  }
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
