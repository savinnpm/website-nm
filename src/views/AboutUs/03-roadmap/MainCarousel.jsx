import { data } from './data'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import { ContentSlider } from './ContentSlider'
import styled from 'styled-components'
import { Icon } from '../../../components/Icon'

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
  const [sliderIndex, setSliderIndex] = useState(currentIndex - 5)

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
    initialSlide: currentIndex - 5,
    slidesToShow: 7,
    slidesToScroll: 3,
    afterChange: (index) => setSliderIndex(index),
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

  const onNext = () => sliderRef?.current?.slickNext()
  const onPrev = () => sliderRef?.current?.slickPrev()
  const handleContentSlideUpdate = (_idx) => {
    const toIdx = _idx > 0 ? _idx - 1 : _idx

    if (getVW() < 768) {
      sliderRef.current.slickGoTo(toIdx)
      setSelected(_idx)
      return
    }

    // sliderRef.current.slickGoTo(_idx)
    setSelected(_idx)
  }

  let passedCurrent = false

  return (
    <Container>

      <CarouselContainer>

        <TimelineInnerContainer>
          <StyledLine />
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
                  >
                    <Dot isActive={isActive} />
                    <DotName isActive={isActive}>{point.name}</DotName>
                  </TimelineItem>
                </div>
              )
            })}
          </Slider>
        </TimelineInnerContainer>

      </CarouselContainer>

      <ArrowButton
        disabled={sliderIndex <= 0}
        onClick={onPrev}
        aria-label='Scroll to View Previous Items'
      >
        <Icon variant='arrow-left' size={24} />
      </ArrowButton>

      <ArrowButton
        disabled={data.length - sliderIndex <= sliderRef?.current?.props?.slidesToShow}
        onClick={onNext}
        aria-label='Scroll to View Next Items'
      >
        <Icon variant='arrow-right' size={24} />
      </ArrowButton>

      <ContentSlider
        activeIndex={selected}
        onContentSlideUpdate={handleContentSlideUpdate}
      />
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0;
  
  @media (max-width: 375px) {
    margin: 0 -1rem;
  }

  @media (max-width: 1365px) {
    margin: 0 -1.5rem; /* depends on section_horizontal_container */
  }
`

const ArrowButton = styled.button`
  /* Button Reset: Start */
  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentColor;
  }
  /* Button Reset: End */

  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 999px;

  transition: all cubic-bezier(.4,0,.2,1) .4s;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 1366px) {
    display: none;
  }
`

const TimelineInnerContainer = styled.div`
  margin: 0 0px;
  position: relative;
  width: calc(100% - 100px - 0px); /* Arrows - 2*50, Margin - 2*0 */
  
  @media (max-width: 1365px) {
    width: calc(100% - 0px - 0px); /* Arrows - 2*50, Margin - 2*0 */
  }
`

const StyledLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);

  @media (max-width: 1365px) {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 15%,
      rgba(255, 255, 255, 0.5) 85%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

const TimelineItem = styled.button`
  /* Button Reset: Start */
  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentColor;
  }
  /* Button Reset: End */

  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 16em;
  color: ${props => props.isFuture ? '#ffffff' : '#855ED7'};

  position: relative;
`

const Dot = styled.div`
  position: relative;
  display: block;
  width: 0px;
  height: 32px;
  background-color: currentColor;
  border: 1px solid currentColor;
  top: 50%;
  transform: ${props => props.isActive ? 'translate(0, -50%) scale(1.75)' : 'translate(0, -50%) scale(1)'};

  ${TimelineItem}:hover &{
    height: 42px;
  }

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: -16px;
    left: 0;
    transform: translate(-50%, -50%);
    background-color: currentColor;
  }
`

const DotName = styled.p`
  position: absolute;
  bottom: 0;

  font-weight: ${props => props.isActive ? '700' : '400'};
  font-size: 14px;
  line-height: 150%;
  height: 4.5em;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
`
