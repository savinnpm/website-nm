import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { ArticleCard } from '../../../components/ArticleCard'
import { FilterTabs } from '../../../components/FilterTabs/FilterTabs'
import { Pagination } from './Pagination'

export const BLOGS_PER_PAGE = 6

const filters = [
  {
    text: 'All',
    value: 'all'
  },
  {
    text: 'Weekly Report',
    value: 'weekly-report'
  },
  {
    text: 'Monthly Review',
    value: 'monthly-review'
  },
  {
    text: 'Exploit Analysis',
    value: 'exploit-analysis'
  },
  {
    text: 'Press Room',
    value: 'press-room'
  }
]

export const RecentPosts = ({ blogPosts }) => {
  const [page, setPage] = useState(0)
  const [isLast, setIsLast] = useState(false)
  const [activeTab, setActiveTab] = useState(filters[0].value)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const router = useRouter()

  const getPageNumbers = () => {
    const actualDividend = parseInt(filteredPosts.length / BLOGS_PER_PAGE)
    if (filteredPosts.length % BLOGS_PER_PAGE === 0) {
      return actualDividend
    }

    return actualDividend + 1
  }

  const totalPages = getPageNumbers()

  useEffect(() => {
    if (BLOGS_PER_PAGE * (page + 1) >= filteredPosts.length - 1) {
      return setIsLast(true)
    }
    if (BLOGS_PER_PAGE * (page + 1) <= filteredPosts.length - 1) {
      return setIsLast(false)
    }
  }, [filteredPosts.length, page])

  const pushQuery = query => {
    router.push({
      query: {
        ...router.query,
        ...query
      }
    }, undefined, {
      scroll: false
    })
  }

  const handlePrev = () => {
    if (page > 0) {
      pushQuery({ page: page })
      setPage((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    pushQuery({ page: page + 2 })
    setPage((prev) => prev + 1)
  }

  const handleSetPage = (_page) => {
    pushQuery({ page: _page + 1 })
    setPage(_page)
  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    const { tab, page: p } = router.query

    // setting current filter/active tab based on url query
    if (!tab) setActiveTab(filters[0].value)
    else {
      const flt = filters.find(f => f.value === tab)
      if (flt) setActiveTab(flt.value)
    }

    // setting current page based on url query
    if (!p) setPage(0)
    else {
      const _page = Math.min(Math.max(0, parseInt(p - 1)), totalPages - 1)
      setPage(_page)
    }

    // filtering blogposts based on current filter
    if (!tab || tab === filters[0].value) setFilteredPosts(blogPosts)
    else {
      const filter = filters.find(f => f.value === tab)
      if (!filter) return

      const blogs = blogPosts.filter(b => {
        const tag = b.tags?.find(t => t.name === filter.text)
        if (tag) return true
        return false
      })
      setFilteredPosts(blogs)
    }
  }, [router.query, blogPosts, totalPages])

  const posts = filteredPosts.slice(page * BLOGS_PER_PAGE, BLOGS_PER_PAGE + page * BLOGS_PER_PAGE)

  return (
    <Container>
      <InnerContainer>
        <FilterTabs
          filters={filters}
          activeFilter={activeTab}
        />
        <TextAndCta>
          <TextContainer>
            <Heading>Recent Posts</Heading>
          </TextContainer>
        </TextAndCta>
        <BlogsContainer>
          {posts.map((post) => (
            <SingleCard key={post.id}>
              <ArticleCard post={post} />
            </SingleCard>
          ))}
        </BlogsContainer>
        <Pagination page={page} setPage={handleSetPage} isLast={isLast} handleNext={handleNext} handlePrev={handlePrev} totalPages={totalPages} />
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  padding-bottom: 96px;
  
  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
  `

const InnerContainer = styled.div`
  border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray[300] : colors.gray[700]};
`

const TextAndCta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const TextContainer = styled.div`
  max-width: 768px;
`

const Heading = styled.h2`
  color: ${(props) => props.theme.color};

  ${typography.styles.displayXs};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
`
const SingleCard = styled.div`
  max-width: 384px;
`
