import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../../styles/colors'
import { typography } from '../../../../../styles/typography'
import { Icon } from '../../../Icon'

export const NavMenuItemLink = ({ item }) => {
  const { t } = useTranslation('common')

  return (
    <Container href={item.href} as={item.isExternal ? 'a' : Link} target={item.isExternal ? '_blank' : null}>
      {item.icon && <Icon size={24} variant={item.icon} />}
      {t(item.title)}
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
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['700']};
  }

  svg {
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['500']};
  }
`
