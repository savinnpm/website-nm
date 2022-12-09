import { Hero } from './01-hero'
import { Media } from './03-media'

export const PressRoom = ({ news }) => {
import { Annoucement } from './03-announcement'
import { Media } from './04-media'

const PressRoom = ({news}) => {
  return (
    <>
      <Hero />
      <Annoucement />
      <Media news={news} />
    </>
  )
}

export { PressRoom }
