import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { constants } from "../../../styles/constants"
import { typography } from "../../../styles/typography"
import { Icon } from "../Icon"
import { data } from "./data"
import { NavMenuItem } from "./NavMenuItem"

export const MobileNavContainer = ({ isMenuOpen }) => {
  if (!isMenuOpen) {
    return null
  }

  return (
    <Container>
      <Nav>
        {data.map((item, idx) => {
          return (
            <NavMenuItem key={idx} item={item}/>
          )
        })}
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: ${constants.headerHeight}px;
  left: 0px;
  bottom: 0px;
  z-index: 1;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.primaryBackgroundColor};
  display: block;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.isLightMode ? colors.gray['100'] : colors.gray['700']};
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  gap: 8px;
`
