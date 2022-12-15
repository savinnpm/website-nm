import { Hero } from './01-hero'
import { Announcement } from './02-announcement'
import { Media } from './03-media'

const PressRoom = ({ news, pressRoomPosts, pressRoomPostsTotal, page }) => {
  return (
    <>
      <Hero />
      <Announcement posts={pressRoomPosts} totalPage={pressRoomPostsTotal} page={page} />
      <Media news={news} />
    </>
  )
}

export { PressRoom }
