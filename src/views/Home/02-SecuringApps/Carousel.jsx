import styled from 'styled-components'
import { typography } from '../../../../styles/typography'
import { data } from './data'
import Slider from 'react-slick'
import Image from 'next/image'

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    adaptiveWidth: true,
    swipeToSlide: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {data.map((app, i) => {
        return (
          <AppContainer key={app.name}>
            <Image aria-labelledby={`img-${i}`} src={app.src} height='32' width='32' loading='lazy' />
            <AppName id={`img-${i}`}>{app.name}</AppName>
          </AppContainer>
        )
      })}
    </Slider>
  )
}

const AppContainer = styled.div`
  display: flex !important;
  align-items: center;
  padding: 12px 12px;
  gap: 8px;
  margin-left: 24px;
  justify-content: center;

  &:nth-last-of-type(1) {
    margin-left: 0;
  }
`

const AppName = styled.span`
  color: ${(props) => props.theme.color};

  ${typography.styles.textXl};
  ${typography.weights.bold};
`

export { Carousel }
