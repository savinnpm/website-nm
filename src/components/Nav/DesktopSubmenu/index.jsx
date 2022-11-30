import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { Submenu } from './Submenu'

export const DesktopSubmenu = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {!isMobile && <Submenu />}
    </>
  )
}
