import { FeaturedPosts } from '../../components/FeaturedPosts'
import { Hero } from './01-hero'
import { RecentVideos } from './03-videos'
import { RecentPosts } from './04-RecentPosts'
import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'

export const Blog = ({ blogPosts, totalPages, page, filter, filters }) => {
  return (
    <>
      <Hero />

      <FeaturedPosts posts={blogPosts} />

      <RecentVideos />

      <RecentPosts
        blogPosts={blogPosts}
        totalPages={totalPages}
        page={page}
        filter={filter}
        filters={filters}
      />

      <NewsletterSignupForm />
    </>
  )
}
