import { useMediaQuery } from '../../../../hooks/useMediaQuery'
import { Submenu } from './Submenu'

export const DesktopSubmenu = ({ item }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {!isMobile && <Submenu item={item} />}
    </>
  )
}
