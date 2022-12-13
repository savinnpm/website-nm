import { Hero } from './01-hero'
import { Announcement } from './02-announcement'
import { Media } from './03-media'

const PressRoom = ({ news, posts, num }) => {
  return (
    <>
      <Hero />
      <Announcement posts={posts} num={num} />
      <Media news={news} />
    </>
  )
}

export { PressRoom }
