import styled from 'styled-components'
import { data } from '../data'
import { DesktopNavMenuItem } from './Item'

export const DesktopNavMenu = () => {
  return (
    <NavLinksContainer>
      {data.map((item, idx) => {
        return <DesktopNavMenuItem key={idx} item={item} />
      })}
    </NavLinksContainer>
  )
}

const NavLinksContainer = styled.div`
  display: flex;
  /* gap: 32px; */

  @media (max-width: 768px) {
  display: none; 
  }
`
