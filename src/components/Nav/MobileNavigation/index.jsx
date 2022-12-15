import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

const MobileNavigation = dynamic(() => import('./MobileNavigation').then((mod) => mod.MobileNavigation))

export const MobileNavContainer = ({ isMenuOpen }) => {
  const isMobile = useMediaQuery('(max-width: 1023px)')

  if (!isMenuOpen) {
    return null
  }

  return (
    <>
      {isMobile && (
        <Suspense fallback='Loading...'>
          <MobileNavigation isMenuOpen={isMenuOpen} />
        </Suspense>
      )}
    </>
  )
}
