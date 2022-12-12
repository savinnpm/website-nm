import { Hero } from './01-hero'
import { Media } from './03-media'

export const PressRoom = ({ news }) => {
  return (
    <>
      <Hero />

      <Media news={news} />
    </>
  )
}
