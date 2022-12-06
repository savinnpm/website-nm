import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import styled, { useTheme } from 'styled-components'

const coinbaseImg = '/assets/images/partners/coinbase.webp'
const huobiImg = '/assets/images/partners/huobi.webp'
const okexImg = '/assets/images/partners/okex.webp'
const okxImg = '/assets/images/partners/okx.webp'
const gravityImg = '/assets/images/partners/gravity.webp'

const coinbaseImgDark = '/assets/images/partners/darkmode/coinbase.webp'
const huobiImgDark = '/assets/images/partners/darkmode/huobi.webp'
const okexImgDark = '/assets/images/partners/darkmode/okex.webp'
const okxImgDark = '/assets/images/partners/darkmode/okx.webp'
const gravityImgDark = '/assets/images/partners/darkmode/gravity.webp'

const carouselItemsDark = [
  {
    name: 'Coinbase Ventures',
    imgSrc: coinbaseImgDark
  },
  {
    name: 'Huobi Ventures',
    imgSrc: huobiImgDark
  },
  {
    name: 'OKEX',
    imgSrc: okexImgDark
  },
  {
    name: 'OKX',
    imgSrc: okxImgDark
  },
  {
    name: 'GravityX',
    imgSrc: gravityImgDark
  }
]

const carouselItemsLight = [
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
  const { isLightMode } = useTheme()

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

  const slidesToMap = isLightMode ? carouselItemsLight : carouselItemsDark

  return (
    <LogosContainer>
      <Slider
        ref={sliderRef}
        {...settings}
      >

        {slidesToMap.map((brand, idx) => {
          return (
            <div key={idx}>
              <Image src={brand.imgSrc} alt={brand.name + ' Logo'} width={230} height={64} />
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

  .slick-slider{
    width:100%;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-list {
    margin: 0 -16px;
  }

  .slick-slide img{
    object-fit: contain;
  }
`
