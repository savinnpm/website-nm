import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { MobileNaviagtion } from './MobileNaviagtion'

export const MobileNavContainer = ({ isMenuOpen }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMenuOpen) {
    return null
  }

  return (
    <>
      {isMobile && <MobileNaviagtion isMenuOpen={isMenuOpen} />}
    </>
  )
}
