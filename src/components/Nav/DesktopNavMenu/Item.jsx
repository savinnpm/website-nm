import { Popover } from '@headlessui/react'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Icon } from '../../Icon'
import { DesktopSubmenu } from '../DesktopSubmenu'
import { DesktopNavMenuItemLink } from './Link'

export const DesktopNavMenuItem = ({ item }) => {
  if (item.href) {
    return <DesktopNavMenuItemLink item={item} />
  }

  return (
    <Container>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Button>
            {item.title}
            <Icon size={20} variant={open ? 'chevron-up' : 'chevron-down'} />
          </Button>
          <Popover.Panel>
            <DesktopSubmenu />
          </Popover.Panel>
        </>
      )}
    </Container>
  )
}

const Container = styled(Popover)`
  display: flex;
`

const Button = styled(Popover.Button)`
  display: flex;
  align-items: center;
  margin-top: -12px;
  margin-bottom: -12px;
  padding: 12px 16px;
  gap: 16px;
  color: ${props => props.theme.color};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['700']};
  }

  svg {
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['500']};
  }
`
