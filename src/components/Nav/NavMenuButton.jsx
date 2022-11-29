import styled from "styled-components"
import { colors, primaryColorKey } from "../../../styles/colors"
import { shadows } from "../../../styles/shadows"
import { Icon } from "../Icon"

export const NavMenuButton = ({ onClick, isOpen}) => {
  return (
    <Container onClick={onClick} isOpen={isOpen}>
      <Icon size={24} variant={isOpen ? 'x-close' : 'menu-01'}/>
    </Container>
  )
}

const Container = styled.button`
  display: none;
  padding: 8px;
  border-radius: 8px;
  color: ${props => props.isOpen ? colors.gray['500'] : colors.gray['700']};

  @media (max-width: 768px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    color: ${colors.gray['700']};
    background-color: ${colors.gray['50']};
  }

  :focus,
  :active,
  :focus-visible {
    background-color: ${colors.white};

    outline: none;
    box-shadow: ${shadows.xs}, 0px 0px 0px 4px ${(props) => props.theme.isLightMode ? colors[primaryColorKey]["100"] : colors[primaryColorKey]["100"]};
  }
`
