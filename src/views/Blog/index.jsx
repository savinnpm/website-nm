import { FeaturedPosts } from '../../components/FeaturedPosts'
import { Hero } from './01-hero'
import { RecentVideos } from './03-videos'
import { RecentPosts } from './04-RecentPosts'
import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'

export const Blog = ({ blogPosts }) => {
  return (
    <>
      <Hero />

      <FeaturedPosts posts={blogPosts} />

      <RecentVideos />

      <RecentPosts blogPosts={blogPosts} />

      <NewsletterSignupForm />
    </>
  )
}
