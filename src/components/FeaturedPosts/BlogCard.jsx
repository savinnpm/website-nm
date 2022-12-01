import Image from 'next/image'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { utils } from '../../../styles/utils'
import { getFormattedDate } from '../../utils'

export const BlogCard = ({ post }) => {
  return (
    <Container href={post.slug} target='_blank' rel='noreferrer'>
      <ImageContainer>
        <Image src={`/${post.image}`} alt={post.title} width={500} height={500} loading='lazy' />
      </ImageContainer>

      <Contents>

        <Time itemprop='published' datetime={post.date}>{getFormattedDate(new Date(post.date).toString())}</Time>

        <Title>{post.title}</Title>

        <Intro>{post.intro}&hellip;</Intro>

        <TagsContainer>
          {post.tags.map((tag) => (
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
    // if first child & screen size is above 1024px
    @media screen and (min-width: 1024px) {
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
  
  // if screen size is below 1024px
  @media screen and (max-width: 1024px) {
    // change font style of <Title> component of 2nd/3rd children
    & > div:nth-of-type(2) > h3 {
      ${typography.styles.textLg};
    }
  }

  // change <TagsContainer> style for first child
  &:nth-of-type(1) > div:nth-of-type(2) > div:last-of-type {
    margin-bottom: 0px;
  }

`

const Contents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  position: relative;
  height: 240px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
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
  margin-bottom: 10px;
  
  @media screen and (max-width: 1024px) {
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
