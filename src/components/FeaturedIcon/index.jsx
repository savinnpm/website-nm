import styled from "styled-components"
import { colors, primaryColorKey } from "../../../styles/colors"
import { Icon } from "../Icon"
import { size } from "./size"

export const FeaturedIcon = ({ variant, size }) => {
  return (
    <IconContainer size={size}>
      <Icon variant={variant} />
    </IconContainer>
  )
}


const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${size};

  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors.white};
  background: ${props => props.theme.isLightMode ? colors[primaryColorKey]['100'] : colors.gray['600']};
  box-shadow: 0 0 0 4px ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['700']}, inset 0 0 0 4px ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['700']};

  @media (max-width: 768px) {
    box-shadow: 0 0 0 3px ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['700']}, inset 0 0 0 3px ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['700']};
  }
`