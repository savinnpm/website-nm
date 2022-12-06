import { data } from './data'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import { ContentSlider } from './ContentSlider'
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'

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
    console.log('updated', _idx)

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
  
  @media (max-width: 375px) {
    margin: 0 -1rem;
  }

  @media (max-width: 1365px) {
    margin: 0 -1.5rem; /* depends on section_horizontal_container */
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
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  color: ${props => props.isFuture ? '#f00' : '#855ED7'};

`

const Dot = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? 'blue' : 'green'};

  ${TimelineItem}:hover &{
    border: 1px solid red;
  }
`

const DotName = styled.p`
  ${typography.styles.textSm};
  ${typography.weights.bold};
`
