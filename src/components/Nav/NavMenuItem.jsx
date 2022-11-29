import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { constants } from "../../../styles/constants"
import { typography } from "../../../styles/typography"
import { Icon } from "../Icon"
import { MobileSubMenu } from "./MobileSubMenu"

export const NavMenuItem = ({item}) => {
  if (item.href) {
    return <LinkItemContainer href={item.href}>
      {item.title}
    </LinkItemContainer>
  }
  
  return (
    <MobileSubMenu item={item}/>
  )
}


const LinkItemContainer = styled.a`
  display: flex;
  padding: 12px 16px;
  gap: 16px;
  color: ${props => props.theme.isLightMode ? colors.gray['900'] : colors.gray['900']};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['50']};
  }
`
