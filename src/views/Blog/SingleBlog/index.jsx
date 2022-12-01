import { mockData } from '../../../../services/_mock_'
import { BlogHero } from './BlogHero'
import { Content } from './Content'

export const BlogPost = ({ postId }) => {
  const getCurrentPost = () => {
    const postToShow = mockData.articleList.docs.filter((post) => post.id === postId)

    return postToShow[0]
  }

  const post = getCurrentPost()

  const timeToRead = '10 min'

  return (
    <>
      <BlogHero title={post.title} createdAt={post.createdAt} timeToRead={timeToRead} />
      <Content content={post.content} />
    </>
  )
}
