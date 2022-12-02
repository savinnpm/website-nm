import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { utils } from '../../../styles/utils'
import { TableOfContents } from '../../components/BlogDetails/TableOfContents'
import { Shareit } from '../../components/Shareit'
import { BlogHero } from './BlogHero'
import { Content } from './Content'

export const BlogPost = (props) => {
  const [timeToRead, setTimeToRead] = useState('0 min')

  useEffect(() => {
    if (process.browser) {
      const wpm = 225
      const text = document.getElementsByClassName('article')[0].innerText

      const words = text.trim().split(/\s+/).length
      const time = Math.ceil(words / wpm)

      setTimeToRead(`${time} min`)
    }
  }, [])

  const wrapperClass = 'article'
  return (
    <>
      <BlogHero title={props.post.title} featuredImage={props.post.image} createdAt={props.post.date} timeToRead={timeToRead} />
      <MainWrapper>
        <Sidebar>
          <TableOfContents title={props.post.title} wrapperClass={wrapperClass} />
        </Sidebar>

        <ContentWrapper>
          <Content content={props.post.content.html} wrapperClass={wrapperClass} />
          <Shareit title={props.post.title} intro={props.post.intro} />
        </ContentWrapper>
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  ${utils.fullWidthContainer};
  padding-left: 86px;
  padding-right: 86px;

  display: grid;
  gap: 64px;
  grid-template-columns: 4fr 9fr;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    
    ${utils.fullWidthContainer};
  }
`

const Sidebar = styled.div`
  border-right: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
`

const ContentWrapper = styled.div`
  /* grid-template-columns: 4fr; */
`
