import { FeaturedPosts } from '../../components/FeaturedPosts'
import { Hero } from './01-hero'
import { RecentVideos } from './03-videos'
import { SignupNewsletter } from './05-signup-newsletter'

export const Blog = ({ blogPosts }) => {
  return (
    <>
      <Hero />

      <FeaturedPosts posts={blogPosts} />

      <RecentVideos />

      <SignupNewsletter />
    </>
  )
}
