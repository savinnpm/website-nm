import styled from 'styled-components'
import { data } from '../data'
import { MenuItem } from './MenuItem'

export const DesktopNavigation = () => {
  return (
    <NavLinksContainer>
      {data.map((item, idx) => {
        return <MenuItem key={idx} item={item} />
      })}
    </NavLinksContainer>
  )
}

const NavLinksContainer = styled.div`
  display: flex;
  /* gap: 32px; */

  @media (max-width: 1023px) {
    display: none;
  }
`
