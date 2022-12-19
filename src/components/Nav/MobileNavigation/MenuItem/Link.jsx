import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import {
  colors,
  primaryColorKey
} from '../../../../../styles/colors'
import { typography } from '../../../../../styles/typography'
import { Icon } from '../../../Icon'

export const NavMenuItemLink = ({ item }) => {
  const { t } = useTranslation('common')

  return (
    <Container href={item.href} as={item.isExternal ? 'a' : Link} target={item.isExternal ? '_blank' : null}>
      {item.icon && <Icon size={24} variant={item.icon} />}
      {t(item.title)}  {item?.badge && <Badge>{item.badge}</Badge>} {item.isExternal && <Icon size={18} variant='link-external-01' />}
    </Container>
  )
}

const Container = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  color: ${props => props.theme.color};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${colors[primaryColorKey]['600']};
     color: ${colors.white};
    h3,
    svg {
      color: white;
    }

    p {
      color: ${colors.gray['50']};
    }
  }

  svg {
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['300']};
  }
`

const Badge = styled.div`
  ${typography.styles.textSm};
  ${typography.weights.medium};
  color: ${props => props.theme.isLightMode ? colors['blue-dark'][700] : colors['blue-dark'][400]};
  background: ${props => props.theme.isLightMode ? colors['blue-dark'][100] : colors.gray[700]};
  padding: 2px 10px;
  border-radius: 16px;
`
