import { MobileSubMenu } from '../SubMenu'
import { NavMenuItemLink } from './Link'

export const NavMenuItem = ({ item }) => {
  if (item.href) {
    return <NavMenuItemLink item={item} />
  }

  return (
    <MobileSubMenu item={item} />
  )
}
