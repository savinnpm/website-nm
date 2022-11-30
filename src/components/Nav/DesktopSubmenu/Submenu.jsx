import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { shadows } from '../../../../styles/shadows'

export const Submenu = () => {
  return (
    <Container>
      hello
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0px;
  padding: 64px;
  max-height: 60vh;
  z-index: 2;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.primaryBackgroundColor};
  display: block;
  border-top: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['100'] : colors.gray['700']};
  box-shadow: ${shadows.lg};
`
