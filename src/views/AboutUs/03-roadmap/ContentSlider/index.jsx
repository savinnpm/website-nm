import {
  useEffect,
  useRef
} from 'react'

import Slider from 'react-slick'
import styled from 'styled-components'

import { blurs } from '../../../../../styles/blurs'
import { colors } from '../../../../../styles/colors'
import { typography } from '../../../../../styles/typography'
import { utils } from '../../../../../styles/utils'
import { Icon } from '../../../../components/Icon'
import { data } from '../data'

export const ContentSlider = ({ activeIndex, onContentSlideUpdate }) => {
  const sliderRef = useRef(null)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    initialSlide: activeIndex,
    afterChange: (idx) => onContentSlideUpdate(idx),
    arrows: false
  }

  useEffect(() => {
    sliderRef.current.slickGoTo(activeIndex)
  }, [activeIndex])

  const onNext = () => sliderRef?.current?.slickNext()
  const onPrev = () => sliderRef?.current?.slickPrev()

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => {
          const { name, Story } = item

          const isActive = activeIndex === i

          return (
            <SlideContent
              key={i}
              tabIndex={isActive ? undefined : '-1'}
            >
              <h3>{name}</h3>
              <Story key={`story-${i}`} />
            </SlideContent>
          )
        })}
      </Slider>

      <ArrowsContainer>

        <ArrowButton
          disabled={activeIndex <= 0}
          onClick={onPrev}
          title='Previous'
        >
          <Icon variant='arrow-left' size={24} />
        </ArrowButton>

        <ArrowButton
          disabled={data.length - activeIndex <= sliderRef?.current?.props?.slidesToShow}
          onClick={onNext}
          title='Next'
        >
          <Icon variant='arrow-right' size={24} />
        </ArrowButton>
      </ArrowsContainer>
    </div>
  )
}

const SlideContent = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 64px;
  ${typography.styles.textMd};
  ${typography.weights.regular};

  @media (max-width: 1365px) {
    margin-top: 48px;
  }

  @media (max-width: 767px) {
    margin-top: 48px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  h3 {
    ${typography.styles.displayXs};
    ${typography.weights.semibold};

    @media screen and (max-width: 768px) {
      ${typography.styles.textXl};
    }
  }

  p {
    margin-top: 20px;

    &:first-child {
      margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 11px;
    }
  }

  li {
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`

const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ArrowButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  cursor: pointer;
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
    cursor: not-allowed;
  }
  > span {
    ${utils.srOnly};
  }
`
