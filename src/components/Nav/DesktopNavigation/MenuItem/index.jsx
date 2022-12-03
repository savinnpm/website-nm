import { LinkItem } from './LinkItem'
import { SubmenuItem } from './SubmenuItem'

export const MenuItem = ({ item }) => {
  if (item.href) {
    return <LinkItem item={item} />
  }

  return (
    <SubmenuItem item={item} />
  )
}
