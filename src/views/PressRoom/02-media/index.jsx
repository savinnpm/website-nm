import { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { ArticleCard } from '../../../components/ArticleCard'
import { ArrowLeft, ArrowRight } from '../../../components/Icon/variants/Arrows'

export const Media = ({ posts }) => {
  const sliderRef = useRef(null)

  const handleArrowClick = dir => {
    if (dir === 'left') {
      sliderRef.current.slickPrev()
    }

    if (dir === 'right') {
      sliderRef.current.slickNext()
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    // adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Container>
      <InnerContainer>
        <Title>Neptune Mutual in the Media</Title>

        <SliderContainer>
          <Slider {...settings} ref={sliderRef}>
            {posts.map((post) => {
              return (
                <SingleCard key={post.id}>
                  <ArticleCard post={post} />
                </SingleCard>
              )
            })}
          </Slider>
        </SliderContainer>
        <ArrowsContainer>
          <ArrowButton
            onClick={() => handleArrowClick('left')}
          >
            <ArrowLeft width='24' height='24' />
          </ArrowButton>
          <ArrowButton
            onClick={() => handleArrowClick('right')}
          >
            <ArrowRight width='24' height='24' />
          </ArrowButton>
        </ArrowsContainer>
      </InnerContainer>

    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer}
`

const InnerContainer = styled.div`
  padding: 32px 0 96px 0;
  border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray[300] : colors.gray[700]};

  .slick-slide:not(.slick-active) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1024px) {
    .slick-slide:not(.slick-active) + .slick-active {
      padding-right: 16px;
    }
  
    .slick-center {
      padding-left: 16px;
      padding-right: 16px;
    }
    
    .slick-center + .slick-slide {
      padding-left: 16px;
    }    
  }

  @media screen and (max-width: 1024px) {
    .slick-slide:not(.slick-active) + .slick-active {
      padding-right: 16px;
    }

    .slick-current + .slick-slide {
      padding-left: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .slick-active {
      padding: 0px !important;
    }
  }
`

const Title = styled.p`
  ${typography.styles.displayXs}
  ${typography.weights.semibold}
`

const SliderContainer = styled.div`
  margin-top: 32px;
`

const SingleCard = styled.div`
  flex: 1 1 30%;
`

const ArrowsContainer = styled.div`
  margin-top: 64px;

  display: flex;
  gap: 36px;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 48px;
  }
`

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 9999px;
  border: 1px solid ${colors.gray[200]};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    background-color: ${props => props.theme.isLightMode ? 'transparent' : colors.gray[700]};
  }

`
