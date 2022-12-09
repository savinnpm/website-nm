import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { ArticleCard } from '../../../components/ArticleCard'
import { Pagination } from '../../Blog/04-RecentPosts/Pagination'

const BLOGS_PER_PAGE = 4
export const LatestAnnouncements = ({ posts }) => {
  const [page, setPage] = useState(0)
  const [isLast, setIsLast] = useState(false)

  const getPageNumbers = () => {
    const actualDividend = parseInt(posts.length / BLOGS_PER_PAGE)
    if (posts.length % BLOGS_PER_PAGE === 0) {
      return actualDividend
    }

    return actualDividend + 1
  }

  const totalPages = getPageNumbers()

  useEffect(() => {
    if (BLOGS_PER_PAGE * (page + 1) >= posts.length - 1) {
      return setIsLast(true)
    }
    if (BLOGS_PER_PAGE * (page + 1) <= posts.length - 1) {
      return setIsLast(false)
    }
  }, [posts.length, page])

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    setPage((prev) => prev + 1)
  }

  const handleSetPage = (_page) => {
    setPage(_page)
  }

  const slicedPosts = posts.slice(page * BLOGS_PER_PAGE, BLOGS_PER_PAGE + page * BLOGS_PER_PAGE)
  return (
    <Container>
      <Title>Press Room / Latest Announcements</Title>

      <BlogsContainer>
        {slicedPosts.map((post) => (
          <SingleCard key={post.id}>
            <ArticleCard post={post} />
          </SingleCard>
        ))}
      </BlogsContainer>

      <Pagination
        page={page}
        setPage={handleSetPage}
        isLast={isLast}
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={totalPages}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 96px 0px;
  ${utils.fullWidthContainer}
`

const Title = styled.p`
  ${typography.styles.displayXs}
  ${typography.weights.semibold}
`

const BlogsContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SingleCard = styled.div`
  flex: 1 1 30%;
`
