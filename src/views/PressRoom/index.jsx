import { Hero } from './01-hero'
import { Annoucement } from './02-announcement'
import { Media } from './03-media'

const PressRoom = ({ news, posts }) => {
  return (
    <>
      <Hero />
      <Annoucement posts={posts} />
      <Media news={news} />
    </>
  )
}

export { PressRoom }
