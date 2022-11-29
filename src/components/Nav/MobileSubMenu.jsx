import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { constants } from "../../../styles/constants"
import { typography } from "../../../styles/typography"
import { Icon } from "../Icon"

export const MobileSubMenu = ({item}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <SubmenuTriggerContainer onClick={() => setIsMenuOpen(prev => !prev)}>
      <Title>{item.title}</Title>
      <Icon size={20} variant={isMenuOpen ? 'placeholder' : 'sun'} />
    </SubmenuTriggerContainer>
  )
}


const SubmenuTriggerContainer = styled.button`
  display: flex;
  padding: 12px 16px;
  gap: 16px;
  color: ${props => props.theme.isLightMode ? colors.gray['900'] : colors.gray['900']};
  text-align: left;

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['50']};
  }
`

const Title = styled.div`
  flex: 1;
`