import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { typography } from '../../styles/typography'
import { utils } from '../../styles/utils'
import { getFormattedDate } from '../helpers'
import { getBlurDataURL } from '../helpers/images'
import { Tag } from './Tag'

export const ArticleCard = ({ post, type = 'blog' }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`${post.image}`}
          alt={post.alt.toLowerCase() === post.title.toLowerCase() ? '' : post.alt}
          fill
          sizes='(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 420px'
          placeholder='blur'
          blurDataURL={getBlurDataURL(800, 450)}
        />
      </ImageContainer>

      <Time itemprop='published' datetime={post.date}>{getFormattedDate(new Date(post.date).toString())}</Time>

      <TitleContainer href={`/${type}/${post.slug}`}>
        <Title>{post.title}</Title>
      </TitleContainer>

      <Intro>{post.intro}&hellip;</Intro>

      <TagsContainer>
        {post.tags.slice(0, 1).map((tag) => (
          <Tag key={tag.name} color={tag.color} href={`/${type}/tag/${tag.slug}`}>{tag.name}</Tag>
        ))}
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

const TitleContainer = styled(Link)``

const Title = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.medium};

  --max-lines: 2;
  ${utils.maxLines};
`

const Intro = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.secondaryColor};
  ${typography.styles.textMd};
  ${typography.weights.regular};

  --max-lines: 2;
  ${utils.maxLines};
`

const TagsContainer = styled.div`
  margin-top: 24px;

  display: flex;
  flex-wrap: wrap;
`
