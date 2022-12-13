import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

import { chunkArray } from '../../../helpers'
import { Pagination } from '../../../components/Pagination'

import { Card } from './Card'

const ITEM_PER_PAGE = 4

const Announcement = (props) => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [list, setList] = useState([])

  useEffect(() => {
    if (props.num) {
      setPage(props.num - 1)
    }
  }, [props.num])

  useEffect(() => {
    if (Array.isArray(props.posts) && props.posts.length) {
      const posts = chunkArray(props.posts, ITEM_PER_PAGE)
      setList(posts)
    }
  }, [props.posts])

  const handlePrev = () => {
    let queryString = '/pressroom'

    if (router.query.slug) queryString += `/tag/${router.query.slug}`
    queryString += `/page/${page - 1 + 1}` // + 1 for url

    router.push(queryString, undefined, { scroll: false })
  }

  const handleNext = () => {
    let queryString = '/pressroom'

    if (router.query.slug) queryString += `/tag/${router.query.slug}`
    queryString += `/page/${page + 2}` // + 1 for url

    router.push(queryString, undefined, { scroll: false })
  }

  const handleSetPage = (_page) => {
    let queryString = '/pressroom'

    if (router.query.slug) queryString += `/tag/${router.query.slug}`
    queryString += `/page/${_page + 1}` // + 1 for url

    router.push(queryString, undefined, { scroll: false })
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
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
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

export { Announcement }
