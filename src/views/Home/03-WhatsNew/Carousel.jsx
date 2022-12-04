import { useRef, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { blurs } from '../../../../styles/blurs'
import { colors } from '../../../../styles/colors'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'
import { ArticleCard } from '../../../components/ArticleCard'

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

const initialSlide = 0

export const Carousel = ({ posts = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide)
  const [isLast, setIsLast] = useState(initialSlide === posts.length - 1)
  const sliderRef = useRef(null)

  const handleBeforeChange = (oldIndex, newIndex) => {
    // Hack to find if we are on last slide
    // This has few bugs, it's better dropping idea to disable the buttons and remove both states `currentIndex` and `isLast`
    if (oldIndex === newIndex) {
      setIsLast(true)
    } else {
      setIsLast(false)
    }
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    rows: 1,
    centerMode: false,
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
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    beforeChange: handleBeforeChange,
    afterChange: setCurrentIndex
  }

  return (
    <Container>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {posts.map(post => {
          return <ArticleCard key={post.id} post={post} />
        })}

      </Slider>

      <Arrows>
        <PrevArrow onClick={() => { sliderRef.current.slickPrev() }} disabled={currentIndex === 0} />
        <NextArrow onClick={() => { sliderRef.current.slickNext() }} disabled={isLast} />
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
      transition: visibility 0.3s 1s linear;
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
