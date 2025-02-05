import styled from 'styled-components'

import { colors } from '../../../styles/colors'
import { utils } from '../../../styles/utils'
import { HtmlContent } from '../../components/Content'
import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'
import { SocialShare } from '../../components/SocialShare'
import { TableOfContents } from '../../components/TableOfContents'
import { Tags } from '../../components/Tags'
import { BlogHero } from './01-hero'
import { RelatedPosts } from './03-related-posts'

export const BlogPostDetail = (props) => {
  const timeToRead = `${props.post.content.minsToRead} min`
  return (
    <>
      <BlogHero title={props.post.title} alt={props.post?.meta?.image?.alt} featuredImage={props.post.image} createdAt={props.post.date} timeToRead={timeToRead} />

      <MainWrapper>
        <Sidebar>
          <TableOfContents title={props.post.title} headers={props.post.content.toc} />
        </Sidebar>

        <ContentWrapper>
          <HtmlContent content={props.post.content.html} />

          <Tags tags={props.post.tags} />

          <SocialShare title={props.post.title} intro={props.post.intro} />
        </ContentWrapper>
      </MainWrapper>

      <RelatedPosts blogPosts={props.relatedPosts} />

      <NewsletterSignupForm showRSS atomLink='/blog/atom.xml' rssLink='/blog/rss.xml' />
    </>
  )
}

const MainWrapper = styled.div`
  ${utils.fullWidthContainer};
  padding-left: 86px;
  padding-right: 86px;
  word-break: break-word;


  display: grid;
  gap: 64px;
  grid-template-columns: 4fr 9fr;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`

const Sidebar = styled.div`
  border-right: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
  width: 324px;

  @media (max-width: 1023px) {
    display: none;
  }
`

const ContentWrapper = styled.div`
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
`
