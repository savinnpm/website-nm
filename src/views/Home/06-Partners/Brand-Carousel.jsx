import { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

const coinbaseImg = 'assets/images/partners/coinbase.png'
const huobiImg = 'assets/images/partners/huobi.png'
const okexImg = 'assets/images/partners/okex.png'
const okxImg = 'assets/images/partners/okx.png'
const gravityImg = 'assets/images/partners/gravity.png'

const carouselItems = [
  {
    name: 'Coinbase Ventures',
    imgSrc: coinbaseImg
  },
  {
    name: 'Huobi Ventures',
    imgSrc: huobiImg
  },
  {
    name: 'OKEX',
    imgSrc: okexImg
  },
  {
    name: 'OKX',
    imgSrc: okxImg
  },
  {
    name: 'GravityX',
    imgSrc: gravityImg
  }
]

export const BrandCarousel = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    rows: 1,
    centerMode: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  }

  return (
    <LogosContainer>
      <Slider
        ref={sliderRef}
        {...settings}
      >

        {carouselItems.map((brand, idx) => {
          return (
            <div key={idx}>
              <img src={brand.imgSrc} alt={brand.name + ' Logo'} />
            </div>
          )
        })}
      </Slider>
    </LogosContainer>
  )
}

const LogosContainer = styled.div`
  margin-top:64px;
  display:flex;
  gap:14px;
  flex-wrap: wrap;
  width: 100%;

  img{
    width: 232px;
  }

  .slick-slider{
    width:100%;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-list {
    margin: 0 -16px;
  }
`
