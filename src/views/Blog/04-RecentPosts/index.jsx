import { useRouter } from 'next/router'
import styled from 'styled-components'

import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { ArticleCard } from '../../../components/ArticleCard'
import { Filter } from '../../../components/Filter'
import { FilterTabs } from '../../../components/FilterTabs/FilterTabs'
import { Pagination } from '../../../components/Pagination'

export const RecentPosts = ({ blogPosts, page, totalPages, filter, filters }) => {
  const router = useRouter()

  const handleFilterChange = option => {
    router.push(`/blog/tag/${option}`, undefined, { scroll: false })
  }

  const handleSetPage = (_page) => {
    let queryString = '/blog'

    if (router.query.slug) queryString += `/tag/${router.query.slug}`
    queryString += `/page/${_page + 1}` // + 1 for url

    router.push(queryString, undefined, { scroll: false })
  }

  const handleNext = () => {
    let queryString = '/blog'

    if (router.query.slug) queryString += `/tag/${router.query.slug}`
    queryString += `/page/${page + 2}` // + 1 for url

    router.push(queryString, undefined, { scroll: false })
  }

  const handlePrev = () => {
    let queryString = '/blog'

    if (router.query.slug) queryString += `/tag/${router.query.slug}`
    queryString += `/page/${page - 1 + 1}` // + 1 for url

    router.push(queryString, undefined, { scroll: false })
  }

  return (
    <Container>
      <InnerContainer>
        <FilterTabs
          filters={filters}
          activeFilter={filter}
          mapUrl={slug => `/blog/tag/${slug}`}
        />

        <FilterMobileContainer>
          <Filter
            options={filters.map(f => f.value)}
            selectedOption={filter}
            getOptionText={x => filters.find(f => f.value === x).text}
            setSelectedOption={handleFilterChange}
          />
        </FilterMobileContainer>

        <TextAndCta>
          <TextContainer>
            <Heading>Recent Posts</Heading>
          </TextContainer>
        </TextAndCta>
        <BlogsContainer>
          {blogPosts.map((post) => (
            <SingleCard key={post.id}>
              <ArticleCard post={post} />
            </SingleCard>
          ))}
        </BlogsContainer>
        <Pagination
          page={page}
          setPage={handleSetPage}
          isLast={page === totalPages - 1}
          handleNext={handleNext}
          handlePrev={handlePrev}
          totalPages={totalPages}
        />
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  padding-bottom: 96px;
  
  @media (max-width: 768px) {
    padding-bottom: 64px;
    margin-bottom: 64px;
  }
  `

const InnerContainer = styled.div`
  border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray[300] : colors.gray[700]};
  
  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
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
  display: grid;
  grid-template-columns: repeat(3,1fr);

  gap: 32px;
  margin-top: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SingleCard = styled.div`
  flex: 1 1 30%;
`

const FilterMobileContainer = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
