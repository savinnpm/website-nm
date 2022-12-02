import Image from 'next/image'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { utils } from '../../../styles/utils'
import { getFormattedDate } from '../../utils'

export const FeaturedPostCard = ({ post }) => {
  return (
    <Container href={`/blog/${post.slug}`}>
      <ImageContainer>
        <Image src={`/${post.image}`} alt={post.title} fill loading='lazy' />
      </ImageContainer>

      <Contents>

        <Time itemprop='published' datetime={post.date}>{getFormattedDate(new Date(post.date).toString())}</Time>

        <Title>{post.title}</Title>

        <Intro>{post.intro}&hellip;</Intro>

        <TagsContainer>
          {post.tags.slice(0, 1).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </Contents>
    </Container>
  )
}

const Container = styled.a`
  --max-lines: 1;
  display: flex;
  flex-direction: row;
  gap: 24px;
  
  // if container is a first child
  &:nth-of-type(1) {
    // if first child & screen size is above 768px
    @media screen and (min-width: 768px) {
      display: block;

      grid-row-start: 1;
      grid-row-end: 3;
      
      flex-direction: column;
      gap: 32px;
      
      --max-lines: 2;
    }
  }
  
  // if not first child, then change font style for <Title> component
  &:not(:nth-of-type(1)) > div:nth-of-type(2) > h3 {
    ${typography.styles.textLg};
  }
  
  // if screen size is below 860px
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 21px;

    --max-lines: 2;
  }

  // change <TagsContainer> style for first child
  &:nth-of-type(1) > div:nth-of-type(2) > div:last-of-type {
    margin-bottom: 0px;
    margin-top: 24px;
  }

`

const Contents = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 768px) {
    height: auto;
  }

  ${Container}:nth-of-type(1) > & {
    @media screen and (min-width: 768px) {
      margin-top: 32px;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 195px;
  flex-basis: 160%;
  
  ${Container}:nth-of-type(1) > & {
    @media screen and (min-width: 1024px) {
      /* flex-basis: 280%; */
      height: 200px;
    }
  }
  
  @media screen and (max-width: 768px) {
    min-height: 240px;
    aspect-ratio: 1.715;
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    
    @media screen and (max-width: 768px) {
      aspect-ratio: 1.715;
    }
  }

  
`

const Time = styled.time`
  display: inline-block;
  ${typography.styles.textSm};
  ${typography.weights.semibold};
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['200']};
`

const Title = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.medium};
  `

const Intro = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.secondaryColor};
  ${typography.styles.textMd};
  ${typography.weights.regular};

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
`

const TagsContainer = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 8px;
  
  @media screen and (max-width: 860px) {
    margin-top: 24px;
    margin-bottom: 0px;
  }
`

const Tag = styled.div`
  display: inline-flex;
  padding: 2px 10px;
  border-radius: 9999px;
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['700']};
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['400']};

  min-width: 0;

  ${typography.styles.textSm};
  ${typography.weights.medium};
  ${utils.ellipsis};
`
