import { useMediaQuery } from '../../hooks/useMediaQuery'
import { MobileNav } from './MobileNav'

export const MobileNavContainer = ({ isMenuOpen }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMenuOpen) {
    return null
  }

  return (
    <>
      {isMobile && <MobileNav isMenuOpen={isMenuOpen} />}
    </>
  )
}
