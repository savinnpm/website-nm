import styled from "styled-components"
import { colors, primaryColorKey } from "../../../../styles/colors"
import { typography } from "../../../../styles/typography"
import { Icon } from "../../Icon"

export const NavMenuItemLink = ({ item }) => {
  return (
  <Container href={item.href}>
    {item.icon && <Icon size={24} variant={item.icon}/>}
    {item.title}
  </Container>
  )
}

const Container = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  color: ${props => props.theme.isLightMode ? colors.gray['900'] : colors.gray['900']};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['50']};
  }

  svg {
    color: ${props => colors[primaryColorKey]['600']};
  }
`
