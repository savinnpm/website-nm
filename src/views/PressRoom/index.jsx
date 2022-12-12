import { Hero } from './01-hero'
import { Media } from './03-media'
import { Annoucement } from './03-announcement'

const PressRoom = ({ news }) => {
  return (
    <>
      <Hero />
      <Annoucement />
      <Media news={news} />
    </>
  )
}

export { PressRoom }
