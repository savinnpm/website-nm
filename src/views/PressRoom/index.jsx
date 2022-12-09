import { LatestAnnouncements } from './01-latest-announcements'
import { Media } from './02-media'

export const PressRoom = ({ posts }) => {
  const pressPosts = posts.filter(p => Boolean(p.tags?.find(t => t.name === 'Press Room')))
  return (
    <>
      <LatestAnnouncements posts={pressPosts} />

      <Media posts={posts} />
    </>
  )
}
