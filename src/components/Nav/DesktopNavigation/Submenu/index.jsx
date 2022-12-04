import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useMediaQuery } from '../../../../hooks/useMediaQuery'

const Submenu = dynamic(
  () => import('./Submenu').then((mod) => mod.Submenu)
)

export const DesktopSubmenu = ({ item }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {!isMobile && (
        <Suspense fallback='Loading...'>
          <Submenu item={item} />
        </Suspense>)}
    </>
  )
}
