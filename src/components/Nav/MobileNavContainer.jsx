import { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { data } from './data'
import { NavMenuItem } from './NavMenuItem'

export const MobileNavContainer = ({ isMenuOpen }) => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      // Scroll to top
      window.scrollTo(0, 0)
      // Hide overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  if (!isMenuOpen) {
    return null
  }

  return (
    <Container>
      <Nav>
        {data.map((item, idx) => {
          return (
            <NavMenuItem key={idx} item={item} />
          )
        })}
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: var(--header-height);
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
