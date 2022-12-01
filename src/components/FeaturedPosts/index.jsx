import styled from 'styled-components'
import { typography } from '../../../styles/typography'
import { utils } from '../../../styles/utils'
import { BlogCard } from './BlogCard'

export const FeaturedPosts = ({ posts }) => {
  if (!posts?.length) return <></>

  return (
    <Container>
      <Heading>Featured Posts</Heading>

      <GridContainer>
        {posts.slice(0, 3).map((post, i) => <BlogCard key={i} post={post} />)}
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  margin: 64px auto 96px;
`

const Heading = styled.h2`
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.semibold};

`

const GridContainer = styled.div`
  display: grid;
  margin-top: 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
