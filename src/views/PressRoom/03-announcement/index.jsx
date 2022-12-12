import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Pagination } from '../../Blog/04-RecentPosts/Pagination'

import { useRouter } from 'next/router'

import { Card } from './Card'
import { chunkArray } from '../../../helpers'

const ITEM_PER_PAGE = 4

const Annoucement = (props) => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [list, setList] = useState([])

  useEffect(() => {
    if (Array.isArray(props.pressPosts) && props.pressPosts.length) {
      const posts = chunkArray(props.pressPosts, ITEM_PER_PAGE)
      setList(posts)
    }
  }, [props.pressPosts])

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

  return (
    <Container>
      <HeaderText>Press Room / Latest Announcements</HeaderText>
      <Articles>
        {(list[page] || []).map((post, i) => {
          return <Card key={i} post={post} />
        })}
      </Articles>

      <Pagination
        page={page}
        setPage={handleSetPage}
        isLast={page === (list.length - 1)} // we can handle this inside of the component
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={list.length}
      />
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer}
  padding-top: 96px;
  padding-bottom: 106px;
  border-bottom: 1px solid ${colors.gray[300]}
`

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;

  img {
    object-fit: contain;
  }

  @media (max-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const HeaderText = styled.h2`
  ${typography.weights.semibold}
  ${typography.styles.displayXs}
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};

  @media (max-width: 768px) {
    ${typography.styles.textXl}
  }

`

export { Annoucement }
