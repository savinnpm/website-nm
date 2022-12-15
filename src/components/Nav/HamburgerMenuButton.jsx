import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { shadows } from '../../../styles/shadows'
import { utils } from '../../../styles/utils'
import { Icon } from '../Icon'

export const HamburgerMenuButton = ({ onClick, isOpen }) => {
  return (
    <Container onClick={onClick} isOpen={isOpen}>
      <span>Toggle menu</span>
      <Icon size={24} variant={isOpen ? 'x-close' : 'menu-01'} />
    </Container>
  )
}

const Container = styled.button`
  display: none;
  padding: 8px;
  border-radius: 8px;
  color: ${props => props.theme.isLightMode
  ? (props.isOpen ? colors.gray['500'] : colors.gray['700'])
  : colors.gray['100']
  };

  span {
    ${utils.srOnly};
  }

  @media (max-width: 1023px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    color: ${props => props.theme.isLightMode ? colors.gray['700'] : colors.white};
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['700']};
  }

  :focus,
  :active,
  :focus-visible {
    background-color: ${props => props.theme.isLightMode ? colors.white : colors.gray['600']};

    outline: none;
    box-shadow: ${shadows.xs}, 0px 0px 0px 4px ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['100'] : colors[primaryColorKey]['900']};
  }
`
