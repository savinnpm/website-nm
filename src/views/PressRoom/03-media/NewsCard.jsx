import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { getFormattedDate } from '../../../helpers'
import { getBlurDataURL } from '../../../helpers/images'

export const NewsCard = ({ newsItem }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`${newsItem.image}`}
          alt={newsItem.title.toLowerCase() === newsItem.alt.toLowerCase() ? '' : newsItem.alt}
          fill
          sizes='(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 420px'
          placeholder='blur'
          blurDataURL={getBlurDataURL(800, 450)}
        />
      </ImageContainer>

      <Time itemProp='published' dateTime={newsItem.date}>{getFormattedDate(new Date(newsItem.date).toUTCString())}</Time>

      <TitleContainer href={newsItem.link} target='_blank' rel='noreferrer nofollow'>
        <Title>{newsItem.title}</Title>
      </TitleContainer>

      <TagsContainer>
        <Tag tag={{ color: newsItem.press.badge }}>
          {newsItem.press.name}
        </Tag>
      </TagsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: block;
  text-align: left;
`

const ImageContainer = styled.div`
  position: relative;
  height: 240px;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`

const Time = styled.time`
  display: inline-block;
  margin-top: 32px;
  ${typography.styles.textSm};
  ${typography.weights.semibold};
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['200']};

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Title = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.medium};

  --max-lines: 3;
  ${utils.maxLines};
`

const TitleContainer = styled(Link)`
`

const TagsContainer = styled.div`
  margin-top: 24px;

  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div`
  display: inline-flex;
  padding: 2px 10px;
  border-radius: 9999px;
  background-color: ${props => props.theme.isLightMode ? colors[props.tag.color || primaryColorKey]['50'] : colors.gray['700']};
  color: ${props => props.theme.isLightMode ? colors[props.tag.color || primaryColorKey]['700'] : colors[props.tag.color || primaryColorKey]['400']};

  min-width: 0;

  ${typography.styles.textSm};
  ${typography.weights.medium};
  ${utils.ellipsis};
`
