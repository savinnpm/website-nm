import { Popover } from '@headlessui/react'
import { Icon } from '../../Icon'
import { DesktopSubmenu } from '../DesktopSubmenu'

export const DesktopNavMenuItem = () => {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button>
            Solutions
            <Icon size={20} variant={open ? 'chevron-up' : 'chevron-down'} />
          </Popover.Button>
          <Popover.Panel>
            <DesktopSubmenu />
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
