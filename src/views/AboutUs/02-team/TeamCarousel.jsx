import { data } from './data'
import { useRef } from 'react'
import Slider from 'react-slick'

import styled from 'styled-components'
import { Facebook, LinkedIn, Medium, Twitter } from '../../../components/Icon/variants/Socials/White'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { ArrowLeft, ArrowRight } from '../../../components/Icon/variants/Arrows'
import { typography } from '../../../../styles/typography'

const TeamSliderItem = ({ team }) => {
  console.log({ team })
  const { imgSrc, name, title, links } = team

  return (
    <ItemContainer>
      <img src={imgSrc} alt={`${name} image`} />

      <DetailsContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>

        <LinksContainer>
          {
            links.linkedIn && (
              <a href={links.linkedIn} target='_blank' rel='nofollow noreferrer'>
                <LinkedIn width='16' height='16' />
              </a>
            )
          }
          {
            links.twitter && (
              <a href={links.twitter} target='_blank' rel='nofollow noreferrer'>
                <Twitter width='16' height='16' />
              </a>
            )
          }
          {
            links.medium && (
              <a href={links.medium} target='_blank' rel='nofollow noreferrer'>
                <Medium width='16' height='16' />
              </a>
            )
          }
          {
            links.facebook && (
              <a href={links.facebook} target='_blank' rel='nofollow noreferrer'>
                <Facebook width='16' height='16' />
              </a>
            )
          }
        </LinksContainer>
      </DetailsContainer>
    </ItemContainer>
  )
}

export const TeamCarousel = () => {
  const sliderRef = useRef(null)

  // useEffect(() => {
  //   // Get viewport width

  //   // Change initial slide to show the current item
  //   // Cannot use initialSlide setting in react-slick
  //   if (shouldSetInitial && sliderRef.current) {
  //     if (getVW() < 768) {
  //       sliderRef.current.slickGoTo(currentIndex - 1)
  //     }
  //   }
  // }, [shouldSetInitial])

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    // adaptiveHeight: true,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipeToSlide: false,
          swipe: false,
          touchMove: false,
          slidesToShow: 1
        }
      }
    ]
  }

  const handleArrowClick = dir => {
    if (dir === 'left') {
      sliderRef.current.slickPrev()
    }

    if (dir === 'right') {
      sliderRef.current.slickNext()
    }
  }

  return (
    <Container>
      <Slider {...settings} ref={sliderRef}>
        {data.map((team, idx) => {
          return (
            <div key={idx}>
              <TeamSliderItem
                team={team}
              />
            </div>
          )
        })}
      </Slider>

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
    </Container>
  )
}

const Container = styled.div`
  & .slick-slide[aria-hidden="true"] {
    a {
      display: none;
    }
  }
`

const ItemContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`

const DetailsContainer = styled.div`
  text-align: center;
`

const Name = styled.p`
  ${typography.styles.textLg}
  ${typography.weights.semibold}
  `

const Title = styled.p`
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey][700] : colors[primaryColorKey][500]};
  ${typography.styles.textMd}
  ${typography.weights.regular}
`

const LinksContainer = styled.div`
  margin-top: 16px;
  padding-bottom: 2px;
  display: flex;
  gap: 14px;
  justify-content: center;

  .slick-active[aria-hidden="true"] {
    a {
      display: none;
    }
  }

  a {
    display: flex;
    align-items: center;
  }

  svg {
    color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  }
`

const ArrowsContainer = styled.div`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  `

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 9999px;
  border: 1px solid ${colors.gray[200]};
  cursor: pointer;
`
