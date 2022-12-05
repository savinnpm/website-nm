import dynamic from 'next/dynamic'
import { Router } from 'next/router'
import { useEffect, Suspense } from 'react'
import { useMediaQuery } from '../../../../hooks/useMediaQuery'

const Submenu = dynamic(() => import('./Submenu').then((mod) => mod.Submenu))

export const DesktopSubmenu = ({ item, close }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    // Close menu after navigating to a new page
    const onClose = () => close()
    Router.events.on('routeChangeComplete', onClose)

    return () => {
      Router.events.off('routeChangeComplete', onClose)
    }
  }, [close])

  return (
    <>
      {!isMobile && (
        <Suspense fallback='Loading...'>
          <Submenu item={item} />
        </Suspense>)}
    </>
  )
}
