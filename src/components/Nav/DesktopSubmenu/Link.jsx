import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Icon } from '../../Icon'

export const DesktopNavMenuItemLink = ({ item }) => {
  return (
    <Container href={item.href}>
      {item.icon && <Icon size={24} variant={item.icon} />}
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Container>
  )
}

const Container = styled.a`
  display: flex;
  align-items: flex-start;
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
